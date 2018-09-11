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
                    }).catch((e)=>{console.log(e)})
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
}

module.exports = {
    team
}
