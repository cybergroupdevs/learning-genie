require('./config/config')
const path = require('path');
const express = require('express')
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');
const { ObjectId } = require('mongodb');
const redis = require('redis');
var session = require('express-session')(
    {
        secret: '0dc529ba-5051-4cd6-8b67-c9a901bb8bdf',
        resave: false,
        saveUninitialized: false,
        cookie: { httpOnly: false }
    });
const { User } = require('./app/models/User')
const authHelper = require('./authHelper')
const app = express();
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
let server = http.createServer(app).listen(port, (p) => {
    console.log(`app live on ${port}`);
});
let io = socketIo(server);
io.on('connection', (socket) => {
    console.log(socket.client.id)
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
    socket.on('disconnect', function () {
    });
})
app.get('/login', (req, res) => {
    res.redirect(`${authHelper.getAuthUri()}`);
})
app.get('/authorize', function (req, res) {
    var authCode = req.query.code;
    if (authCode) {
        authHelper.getTokenFromCode(authCode, tokenReceived, req, res);
    }
    else {
        // redirect to home
        console.log('/authorize called without a code parameter, redirecting to login');
        res.redirect('/login');
    }
});
function tokenReceived(req, res, error, token) {
    if (error) {
        console.log('ERROR getting token:' + error);
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
                user.save().then((user) => { }).catch(e => console.log(e))
            }
            res.redirect('/logincomplete')
        })
    }
}

app.get('/logincomplete', function (req, res) {
    var idtoken = req.session.idtoken;
    var email = req.session.email;

    if (idtoken === undefined || email === undefined) {
        console.log('/logincomplete called while not logged in');
        res.redirect('/login');
        return;
    }
    console.log(email);
    res.send(`${email} you are successfully logged in`);
});

app.get('/getuser', (req, res) => {
    if (req.session.idtoken) {
        res.send({
            token: req.session.idtoken,
            email: req.session.email,
            isAdmin: req.session.isAdmin
        })
    }
    else {
        res.status(404).send("user not found")
    }
})

app.get('/refreshtokens', function (req, res) {
    var refresh_token = req.session.refresh_token;
    if (refresh_token === undefined) {
        console.log('no refresh token in session');
        res.redirect('/login');
    }
    else {
        authHelper.getTokenFromRefreshToken(refresh_token, tokenReceived, req, res);
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});
app.get('/', (req, res) => {
    res.send('Welcome to learning Genie')
})

const { answer } = require("./app/controllers");
app.post('/answer', (req, res) => {
    answer.postAnswer(req, res);
})

const { question } = require("./app/controllers");

app.post('/question', (req, res) => {
    question.postQuestion(req, res);
});

app.get('/questions', (req, res) => {
    question.getQuestions(req, res);
});

app.get('/questions/:id', (req, res) => {
    question.getQuestionsId(req, res, req.params.id);
})
app.get('/questionsdata/:id', (req, res) => {
    question.getQuestionsDataId(req, res, req.params.id);
})

const { user } = require("./app/controllers");
app.get('/users', (req, res) => {
    user.getUsers(req, res);
});

app.get('/users/:id', (req, res) => {
    user.getUser(req, res, req.params.id);
});

app.get('/usersdata/:id', (req, res) => {
    user.getUsersData(req, res, req.params.id);
})

const { dashboard } = require("./app/controllers");
app.get('/dashdata', (req, res) => {
    dashboard.getDashData(req, res);
});
