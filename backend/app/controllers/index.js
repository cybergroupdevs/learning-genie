const { dashboard } = require("./dashboard");
const { user } = require("./users");
const { question } = require("./questions");
const { answer } = require("./answer");
const authHelper = require('./authHelper');

module.exports = {
    dashboard,
    user,
    question,
    answer,
    authHelper
}