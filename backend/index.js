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
const { Answer } = require('./app/models/Answer')
const { mongoose } = require('./app/models/db');
const { Question } = require('./app/models/Questions')
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
app.post('/question', (req, res) => {
    let token = req.headers['x-auth'];
    User.findOne({ token }).then((user) => {
        if (user) {
            if (user.isAdmin) {
                let body = _.pick(req.body, ['ques', 'keys', 'team']);
                body.atTime = new Date().getTime();
                let question = new Question(body)
                question.save().then((question) => {
                    if (!question) {
                        res.status(404).send();
                        res.end();
                    }
                    else {
                        res.send({ message: 'Question Posted' });
                        console.log('question emitted');
                        io.sockets.emit('newQuestion', question);
                    }
                })
            }
            else {
                res.status(403).send();
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log(JSON.stringify(e, null, 2)) })
})
app.post('/answer', (req, res) => {
    let token = req.headers['x-auth'];
    token = authHelper.getToken(token);
    User.findOne({ token }).then((user) => {
        if (user) {
            let body = _.pick(req.body, ['q_id', 'ans']);
            body.u_id = user._id
            body.atTime = new Date().getTime()
            let answer = new Answer(body)
            Question.checkAns(body).then((resp) => {
                answer.correct = resp
                answer.save().then((ans) => {
                    if (ans) {
                        res.send("response submitted");
                        res.end();
                        io.to(req.body.clientId).emit("submitted")
                    }
                    else {
                        res.status(404).send("error");
                        res.end();
                    }
                })
            })

        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log("error:", JSON.stringify(e, null, 2)) })
})
app.get('/questions', (req, res) => {
    let token = req.headers['x-auth'];
    User.findOne({ token }).then((user) => {
        if (user) {
            if (user.isAdmin) {
                Question.find({}).sort({ 'atTime': -1 }).then((questions) => {
                    if (!questions) {
                        res.status(400).send()
                    }
                    else {
                        res.send({ questions })
                    }
                })
            }
            else {
                res.status(403).send("UnAuthorized");
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log(JSON.stringify(e, null, 2)) })
})
app.get('/questions/:id', (req, res) => {
    let token = req.headers['x-auth'];
    User.findOne({ token }).then((user) => {
        if (user) {
            if (user.isAdmin) {
                Question.findById(req.params.id).then((question) => {
                    if (!question) {
                        res.status(400).send()
                    }
                    else {
                        Answer.find({ q_id: req.params.id }).sort({ 'atTime': +1 }).populate('u_id', 'email').then(answers => {
                            res.send(answers)
                        })
                    }
                })
            }
            else {
                res.status(403).send("UnAuthorized");
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log(JSON.stringify(e, null, 2)) })
})
app.get('/questionsdata/:id', (req, res) => {
    let token = req.headers['x-auth'];
    User.findOne({ token }).then((user) => {
        if (user) {
            if (user.isAdmin) {
                Question.findById(req.params.id).then((question) => {
                    if (!question) {
                        res.status(400).send()
                    }
                    else {
                        let total = correct = inCorrect = notAnswered = 0;
                        User.count({ team: question.team }).then((count, err) => {
                            total = count
                            Answer.count({ q_id: req.params.id, correct: true }).then((count, err) => {
                                correct = count
                                Answer.count({ q_id: req.params.id, correct: false }).then((count, err) => {
                                    inCorrect = count
                                    notAnswered = total - (correct + inCorrect);
                                    res.send({
                                        'correct': correct,
                                        'inCorrect': inCorrect,
                                        'notAnswered': notAnswered
                                    })
                                })
                            })
                        });
                    }
                })
            }
            else {
                res.status(403).send("UnAuthorized");
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log(JSON.stringify(e, null, 2)) })
})
app.get('/users', (req, res) => {
    let token = req.headers['x-auth'];
    User.findOne({ token }).then((user) => {
        if (user) {
            if (user.isAdmin) {
                User.find({}).then((users) => {
                    res.send({ users })
                })
            }
            else {
                res.status(403).send("UnAuthorized");
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log(JSON.stringify(e, null, 2)) })
})
app.get('/users/:id', (req, res) => {
    let token = req.headers['x-auth'];
    User.findOne({ token }).then((user) => {
        if (user) {
            if (user.isAdmin) {
                User.findById(req.params.id).then((usr) => {
                    if (!usr) {
                        res.status(400).send()
                    }
                    else {
                        Answer.find({ u_id: req.params.id }).sort({ 'atTime': -1 }).populate('q_id').then(answers => {
                            res.send(answers)
                        })
                    }
                })
            }
            else {
                res.status(403).send("UnAuthorized");
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log(JSON.stringify(e, null, 2)) })
})
app.get('/usersdata/:id', (req, res) => {
    let token = req.headers['x-auth'];
    User.findOne({ token }).then((user) => {
        if (user) {
            if (user.isAdmin) {
                User.findById(req.params.id).then((usr) => {
                    if (!usr) {
                        res.status(400).send()
                    }
                    else {
                        let total = correct = inCorrect = notAnswered = 0;
                        Question.count({ team: usr.team }).then((count, err) => {
                            total = count
                            Answer.count({ u_id: req.params.id, correct: true }).then((count, err) => {
                                correct = count
                                Answer.count({ u_id: req.params.id, correct: false }).then((count, err) => {
                                    inCorrect = count
                                    notAnswered = total - (correct + inCorrect);
                                    res.send({
                                        'correct': correct,
                                        'inCorrect': inCorrect,
                                        'notAnswered': notAnswered
                                    })
                                })
                            })
                        });
                    }
                })
            }
            else {
                res.status(403).send("UnAuthorized");
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }).catch(e => { console.log(JSON.stringify(e, null, 2)) })
})

const {dashboard} = require("./app/controllers");
app.get('/dashdata', (req, res) => {
    dashboard.getDashData(req, res, next);
})
