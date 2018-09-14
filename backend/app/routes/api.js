const { Router } = require('express');
const { answer, question, user, dashboard, authHelper, team } = require('../controllers');
const { User } = require('../models');

let founduser;

const apiRoutes = function (router, io) {
    router = Router();

    router.get('/', (req, res) => {
        res.send('Welcome to learning Genie');
    });

    router.get('/login', (req, res) => {
        authHelper.doLogin(res);
    });

    router.get('/authorize', function (req, res) {
        authHelper.authorize(req, res, tokenReceived);
    });

    router.get('/logincomplete', (req, res) => {
        authHelper.loginComplete(req, res);
    });

    router.get('/getuser', (req, res) => {
        authHelper.getUser(req, res);
    });

    router.get('/refreshtokens', (req, res) => {
        authHelper.refreshTokens(req, res, tokenReceived);
    });

    router.get('/logout', (req, res) => {
        authHelper.doLogout(req, res);
    });

    router.post('/answer', (req, res) => {
        let token = authHelper.getToken(req.headers['x-auth']);
        answer.postAnswer(req, res, io, token);
    });

    router.post('/question', (req, res) => {
        question.postQuestion(req, res, io);
    });

    router.get('/questions', (req, res) => {
        question.getQuestions(req, res);
    });

    router.get('/questions/:id', (req, res) => {
        question.getQuestionsId(req, res, req.params.id);
    });

    router.get('/questionsdata/:id', (req, res) => {
        question.getQuestionsDataId(req, res, req.params.id);
    });

    router.get('/users', (req, res) => {
        user.getUsers(req, res);
    });

    router.get('/users/:id', (req, res) => {
        user.getUser(req, res, req.params.id);
    });

    router.get('/usersdata/:id', (req, res) => {
        user.getUsersData(req, res, req.params.id);
    })

    router.get('/dashdata', (req, res) => {
        dashboard.getDashData(req, res);
    });

    router.get('/teams', (req, res) => {
        team.getTeams(req, res);
    });

    router.patch('/user/:id', (req,res) => {
        user.patchUser(req, res, req.params.id);
    })

    router.post('/team', (req, res) => {
        team.createTeam(req, res);
    })
    
    router.patch('/team/:id', (req, res) => {
        team.renameTeam(req, res, req.params.id);
    })

    return router;
}

function tokenReceived(req, res, error, token) {
    if (error) {
        process.logger('ERROR getting token:' + error);
        res.send('ERROR getting token: ' + error);
    } else {
        // save tokens in session
        req.session.email = authHelper.getEmailFromIdToken(token.token.id_token);
        User.findOne({
            'email': req.session.email
        }, function (err, founduser) {
            if (founduser) {
                req.session.idtoken = founduser.token;
                req.session.isAdmin = founduser.isAdmin;
            } else {
                req.session.idtoken = token.token.id_token;
                req.session.isAdmin = false;
                let user = new User({ token: req.session.idtoken, email: req.session.email});
                Team.findOne({'teamName':'cygrp'}).then((team)=>{
                    user.team.push(team);
                    user
                        .save()
                        .then((user) => { })
                        .catch(e => process.logger(e))
                })
            }
            res.redirect('/logincomplete')
        })
    }
}

module.exports = apiRoutes
