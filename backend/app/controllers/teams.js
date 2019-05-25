const { Answer, Question, User, Team } = require('../models');

const team = {
    getTeams: function (req, res) {
        const token = req.headers['x-auth'];
        User
            .findOne({ token })
            .then((user) => {
                cb.getTeamsSuccess(res, user);
            })
            .catch((err) => {
                process.logger(undefined, err);
            });
    },
    getTeamsData: function(req, res, id) {
        const token = req.headers['x-auth'];
        User
            .findOne({ token })
            .then((user) => {
                cb.getTeamsDataSuccess(req, res, user, id);
            })
            .catch((err) => {
                process.logger(undefined, err);
            });
    },
	 getTeamId: function (req, res,id) {
        const token = req.headers['x-auth'];
        User
            .findOne({ token })
            .then((user) => {
                cb.getTeamSuccess(res, user, id);
            })
            .catch((err) => {
                process.logger(undefined, err);
            });
    },
    createTeam: function (req, res) {
        const token = req.headers['x-auth'];
        User
            .findOne({ token })
            .then((user) => {
                cb.createTeamSuccess(req, res, user);
            })
            .catch((err) => {
                process.logger(undefined, err);
            });
    },
    getNonMembers: function(req, res, id) {
        const token = req.headers['x-auth'];
        User
            .findOne({ token })
            .then((user) => {
                cb.getNonMembersSuccess(res, user, id);
            })
            .catch((err) => {
                process.logger(undefined, err);
            });
    },
    renameTeam: function (req, res, id) {
        const token = req.headers['x-auth'];
        User
            .findOne({ token })
            .then((user) => {
                cb.renameTeamSuccess(req, res, user, id);
            })
            .catch((err) => {
                process.logger(undefined, err);
            });
    }
}

const cb = {
    getTeamsSuccess: function (res, user) {
        if (user) {
            user.isAdmin === true
                ? Team
                    .find({})
                    .then((teams) => {
                        res.send({ teams })
                    }).catch((e) => { console.log(e) })
                : res
                    .status(403)
                    .send("UnAuthorized");
        } else {
            res
                .status(401)
                .send();
            // process.logger(undefined, 'user not found');
        }
    },
	
	getTeamSuccess: function (res, user,id) {
        if (user) {
            user.isAdmin === true
                ? Team
                    .findById(id)
                    .then((team) => {
                        if (!team) {
                            res
                                .status(400)
                                .send();
                        } else {
                            User
                                .find({team: id}).select({'email': 1})
                                .then(users => {
                                    res.send(users);
                                });
                        }
                    }).catch((e) => { console.log(e) })
                : res
                    .status(403)
                    .send("UnAuthorized");
        } else {
            res
                .status(401)
                .send();
            // process.logger(undefined, 'user not found');
        }
    },
    getTeamsDataSuccess: (req, res, user, id) => {
        if (user) {
            user.isAdmin === true
                ? Team
                    .findById(id)
                    .then((team) => {
                        if (!team) {
                            res
                                .status(404)
                                .send();
                        } else {
                            let total = correct = inCorrect = notAnswered = 0;
                            Question
                                .count({ 'team': id }) 
                                .then((count, err) => {
                                    total = count;
                                    Answer
                                        .count({ u_id: req.params.id, correct: true })
                                        .then((count, err) => {
                                            correct = count
                                            Answer
                                                .count({ u_id: req.params.id, correct: false })
                                                .then((count, err) => {
                                                    inCorrect = count
                                                    notAnswered = total - (correct + inCorrect);
                                                    res.send({ 'correct': correct, 'inCorrect': inCorrect, 'notAnswered': notAnswered })
                                                })
                                        })
                                });
                        }
                    })
                : res
                    .status(403)
                    .send("UnAuthorized");
        } else {
            res
                .status(401)
                .send();
            // process.logger(undefined, 'user not found');
        }
    },
	getNonMembersSuccess: function (res, user,id) {
        if (user) {
            user.isAdmin === true
                ? Team
                    .findById(id)
                    .then((team) => {
                        if (!team) {
                            res
                                .status(400)
                                .send();
                        } else {
                            User
                                .find({team: {'$ne':id}}).select({'email': 1})
                                .then(users => {
                                    res.send(users);
                                });
                        }
                    }).catch((e) => { console.log(e) })
                : res
                    .status(403)
                    .send("UnAuthorized");
        } else {
            res
                .status(401)
                .send();
            // process.logger(undefined, 'user not found');
        }
    },
    createTeamSuccess: function (req, res, user) {
        if (user) {
            if (user.isAdmin === true) {
                let team = new Team({ 'teamName': req.body.teamName });
                team
                    .save()
                    .then((tm) => {
                        if (!tm) {
                            res
                                .status(404)
                                .send();
                            res.end();
                        } else {
                            res.send({ message: 'Team created' });
                        }
                    })
                    .catch((e) => { console.log(e) })
            }
            else {
                res
                    .status(403)
                    .send("UnAuthorized");
            }
        } else {
            res
                .status(401)
                .send();
            // process.logger(undefined, 'user not found');
        }
    },
    renameTeamSuccess: async function (req, res, user, id) {
        if (user) {
            if (user.isAdmin === true) {
                let team = await Team.findById(id);
                team.teamName = req.body.teamName;
                team
                    .save()
                    .then((tm) => {
                        if (!tm) {
                            res
                                .status(404)
                                .send();
                            res.end();
                        } else {
                            res.send({ message: 'Team renamed' });
                        }
                    })
                    .catch((e) => { console.log(e) })
            }
            else {
                res
                    .status(403)
                    .send("UnAuthorized");
            }
        } else {
            res
                .status(401)
                .send();
            // process.logger(undefined, 'user not found');
        }
    }
}

module.exports = {
    team
}
