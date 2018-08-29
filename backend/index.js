require('./config/config')

const express = require('express')
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

let session = require('express-session')(
    {
        secret: '0dc529ba-5051-4cd6-8b67-c9a901bb8bdf',
        resave: false,
        saveUninitialized: false,
        cookie: { httpOnly: false }
    });

const { User } = require('./app/models/User');

const app = express();

const { answer } = require("./app/controllers");
const { question } = require("./app/controllers");
const { user } = require("./app/controllers");
const { dashboard } = require("./app/controllers");
const { authHelper } = require('./app/controllers');

app.use(session);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth");
    next();
});

const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

let founduser;

const server = http.createServer(app).listen(port, (p) => {
    process.logger(`app live on ${port}`);
});

let io = socketIo(server);

io.on('connection', (socket) => {
    process.logger(socket.client.id);
    socket.emit('clientId', { "clientId": socket.client.id })
    socket.on('joinroom', (data) => {
        User.findOne({ token }).then((user) => {
            if (user) {
                socket.join(user.team)
            }
            else {
                socket.emit('roomjoinfailed');
            }
        })
    })
    socket.on('disconnect', function (req, res) {
        // req.session.destroy();
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to learning Genie');
});

app.get('/login', (req, res) => {
    authHelper.doLogin(res);
});

app.get('/authorize', function (req, res) {
    authHelper.authorize(req, res, tokenReceived);
});

function tokenReceived(req, res, error, token) {
    if (error) {
        process.logger('ERROR getting token:' + error);
        res.send('ERROR getting token: ' + error);
    }
    else {
        // save tokens in session
        req.session.email = authHelper.getEmailFromIdToken(token.token.id_token);
        User.findOne({ 'email': req.session.email }, function (err, founduser) {
            if (founduser) {
                req.session.idtoken = founduser.token;
                req.session.isAdmin = founduser.isAdmin;
            }
            else {
                req.session.idtoken = token.token.id_token;
                req.session.isAdmin = false;
                let user = new User({
                    token: req.session.idtoken,
                    email: req.session.email,
                    team: 'abc'
                })
                user.save().then((user) => { }).catch(e => process.logger(e))
            }
            res.redirect('/logincomplete')
        })
    }
}

app.get('/logincomplete', function (req, res) {
    authHelper.loginComplete(req, res);
});

app.get('/getuser', (req, res) => {
    authHelper.getUser(req, res);
});

app.get('/refreshtokens', function (req, res) {
    authHelper.refreshTokens(req, res, tokenReceived);
});

app.get('/logout', function (req, res) {
    authHelper.doLogout(req, res);
});

app.post('/answer', (req, res) => {
    let token = authHelper.getToken(req.headers['x-auth']);
    answer.postAnswer(req, res, io, token);
});

app.post('/question', (req, res) => {
    question.postQuestion(req, res, io);
});

app.get('/questions', (req, res) => {
    question.getQuestions(req, res);
});

app.get('/questions/:id', (req, res) => {
    question.getQuestionsId(req, res, req.params.id);
});

app.get('/questionsdata/:id', (req, res) => {
    question.getQuestionsDataId(req, res, req.params.id);
});

app.get('/users', (req, res) => {
    user.getUsers(req, res);
});

app.get('/users/:id', (req, res) => {
    user.getUser(req, res, req.params.id);
});

app.get('/usersdata/:id', (req, res) => {
    user.getUsersData(req, res, req.params.id);
})

app.get('/dashdata', (req, res) => {
    dashboard.getDashData(req, res);
});
