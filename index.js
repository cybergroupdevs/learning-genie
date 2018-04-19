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
        saveUninitialized: false
    });

const { Answer } = require('./models/Answer')
const { mongoose } = require('./models/db');
const { Question } = require('./models/Questions')
const { User } = require('./models/User')
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
let redisstore =redis.createClient()
io.on('connection', (socket) => {
    console.log(socket.client.id)
    redisstore.set('clientId', socket.client.id)
    socket.on('joinroom',(data)=>{
        User.findOne({ token }).then((user) => {
            if (user) {
                socket.join(user.team)
            }
            else {
                socket.emit('roomjoinfailed');
            }
        })  
    })
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
            }
            else {
                req.session.idtoken = token.token.id_token;
                let user = new User({
                    token: req.session.idtoken,
                    email: req.session.email,
                    team : 'abc'
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
            console.log('question emitted');
            io.sockets.emit('newQuestion', question);
        }
    })
})
app.post('/answer', (req, res) => {
    let token = req.headers['x-auth'];
    let length= token.length;
    token= token.substr(3,length-6);
    User.findOne({ token }).then((user) => {
        if (user) {
            console.log(req.body)
            let body = _.pick(req.body, ['q_id', 'ans']);
            body.u_id = user._id
            body.atTime = new Date().getTime();
            let answer = new Answer(body);
            answer.save().then((ans) => {
                if (ans) {
                    res.send("response submitted");
                    res.end();
                    redisstore.get('clientId',(err,reply)=>{
                        io.to(reply).emit("submitted")
                        console.log(reply)
                    })
                   
                }
                else {
                    res.status(404).send("error");
                    res.end();
                }
            })
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e=>{console.log(JSON.stringify(e,null,2))})
})

