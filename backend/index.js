require('./config/config')
const path = require('path');
const express = require('express')
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');
const { ObjectId } = require('mongodb');
var session = require('express-session');

const { Answer } = require('./models/Answer')
const { mongoose } = require('./models/db');
const { Question } = require('./models/Questions')
const { User } = require('./models/User')
const authHelper = require('./authHelper')
const app = express();
app.use(session(
    {
        secret: '0dc529ba-5051-4cd6-8b67-c9a901bb8bdf',
        resave: false,
        saveUninitialized: false
    }));

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

})
app.get('/login', (req, res) => {
    res.redirect(`${authHelper.getAuthUri()}`);
})
app.get('/authorize', function (req, res) {
    var authCode = req.query.code;
    if (authCode) {
        console.log('');
        console.log('Retrieved auth code in /authorize: ' + authCode);
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
        User.findOne({ 'email': req.session.email }, function (err,res) {
            if (err)
                console.log(JSON.stringify(error));
            else
                founduser = res;
        })
        setTimeout(()=>{
            console.log(res)
        },3000)
        debugger;
        if (founduser) {
            console.log(JSON.stringify(founduser, null, 2))
            req.session.idtoken = founduser.token;
        }
        else {
            req.session.idtoken = token.token.id_token;
            let user = new User({
                token: req.session.idtoken,
                email: req.session.email
            })
            user.save().then((user) => { }).catch(e => console.log(e))
        }
        res.redirect('/logincomplete')
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
    if (req.session.access_token) {
        res.send({
            token: req.session.idtoken,
            email: req.session.email
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
        res.redirect('/');
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
app.post('/question', (req, res) => {
    let body = _.pick(req.body, ['ques', 'team']);
    body.atTime = new Date().getTime();
    let question = new Question(body)
    question.save().then((question) => {
        if (!question) {
            res.status(404).send();
            res.end();
        }
        else {
            res.send("Question posted");
            console.log('question emitted')
            io.emit('newQuestion', question);
        }
    })
})
app.post('/answer', (req, res) => {
    let token = req.headers.auth
    let body = _.pick(req.body, ['q_id', 'ans']);
    body.atTime = new Date().getTime();
    let answer = new Answer(body);
    answer.save().then((ans) => {
        if (!answer) {
            res.status(404).send("error");
            res.end();
        }
        else {
            res.send("response submitted");
            res.end();
        }
    })
    res.send("Answer Submitted");
})

