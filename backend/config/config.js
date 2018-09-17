var env = process.env.NODE_ENV || 'development'
console.log("***env:", env)

let redirectUri;
if (env === 'development') {
    process.env.PORT = 2018;
    process.env.MONGODB_URI = "mongodb://developer:password777@ds149672.mlab.com:49672/learning-genie-dev";
    redirectUri = 'http://localhost:2018/authorize';
}
else if (env === 'production') {
    process.env.MONGODB_URI = "mongodb://admin:password777@ds012578.mlab.com:12578/learning-genie";
    redirectUri = 'https://learning-genie777.herokuapp.com/authorize';
}

process.logger = function (msg, err) {
    if (env === 'development') {
        if (err) {
            console.log(JSON.stringify(err, null, 2));
        } else {
            console.log(JSON.stringify(msg, null, 2));
        }
    }
}
const clientId = '00466414-78cb-46f9-a8f7-3a366b52293e';
const clientSecret = 'bqmqRFH6239%-jwyCSQL8!$';

let session = require('express-session');
let sess_secret = '0dc529ba-5051-4cd6-8b67-c9a901bb8bdf';
module.exports = {
    "apiBaseUri": '/',
    session,
    sess_secret,
    redirectUri,
    clientId,
    clientSecret
}
