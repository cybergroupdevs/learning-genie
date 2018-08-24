const { Answer } = require('../models');
const { Question } = require('../models');
const { User } = require('../models');

var dashboard = {
    "getDashData": async function (req, res, next) {
        let token = req.headers['x-auth'];
        let user;
        try {
            user = User.findOne({ token });
            return await cb.getDashDataSuccess(res, user);
        } catch (e) {
            console.log(JSON.stringify(e, null, 2));
        }
    }
};

const cb = {
    "getDashDataSuccess": function (res, user) {
        if (user) {
            if (user.isAdmin) {
                let total = correct = inCorrect = notAnswered = 0;
                Question.count()
                    .then((count, err) => {
                        total = count
                        User.count()
                            .then((count, err) => {
                                total *= count
                                Answer.count({ correct: true })
                                    .then((count, err) => {
                                        correct = count
                                        Answer.count({ correct: false })
                                            .then((count, err) => {
                                                inCorrect = count
                                                notAnswered = total - (correct + inCorrect);
                                                res.send({
                                                    'correct': correct,
                                                    'inCorrect': inCorrect,
                                                    'notAnswered': notAnswered
                                                })
                                            })
                                    })
                            })
                    });
            }
            else {
                res.status(403).send("UnAuthorized");
            }
        }
        else {
            res.status(401).send();
            console.log("user not found")
        }
    }
}

module.exports = { dashboard }
