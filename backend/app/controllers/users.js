const { Answer } = require('../models');
const { Question } = require('../models');
const { User } = require('../models');

const config = require("../../config/config");

let user = {
    "getUsers": async function (req, res, next) {
        let token = req.headers['x-auth'];
        let user;
        try {
            user = User.findOne({ token });
            config.logger(process.env.NODE_ENV, JSON.stringify(e, null, 2));
            return await cb.getUsersSuccess(res, user);
        } catch (e) {
            // console.log(JSON.stringify(e, null, 2));
            // config.logger(process.env.NODE_ENV, JSON.stringify(e, null, 2));
        }
    }
}

const cb = {
    "getUsersSuccess": function (res, user) {
        if (user) {
            user.isAdmin === true
                ? User.find({}).then((users) => { res.send({ users }) })
                : res.status(403).send("UnAuthorized");
        }
        else {
            res.status(401).send();
            console.log("user not found");
        }
    }
}

module.exports = { user }
