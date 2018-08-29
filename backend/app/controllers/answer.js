const { Answer } = require('../models');
const { Question } = require('../models');
const { User } = require('../models');

const config = require("../../config/config");

var answer = {
    "postAnswer": function (req, res) {
        const token = req.headers['x-auth'];
        // token = authHelper.getToken(token);
        User.findOne({ token })
            .then((user) => {
                cb.postAnswerSuccess();
            })
            .catch((err) => { config.logger(config.env, undefined, err); });
    }
}

var cb = {
    "postAnswerSuccess": () => {
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
            // console.log("user not found")
        }
    }
}

module.exports = { answer }