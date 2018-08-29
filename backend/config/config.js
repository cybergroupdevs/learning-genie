var env = process.env.NODE_ENV || 'development'
console.log("***env:", env)

if (env === 'development') {
    process.env.PORT = 2018;
    process.env.MONGODB_URI = "mongodb://admin:password777@ds012578.mlab.com:12578/learning-genie";
}
else if (env === 'production') {
    process.env.MONGODB_URI = "mongodb://admin:password777@ds012578.mlab.com:12578/learning-genie";
}

function logger(env, msg, err) {
    if (env === 'development') {
        if (err) {
            console.log(JSON.stringify(err, null, 2));
        }
        console.log(JSON.stringify(msg, null, 2));
    }
}

module.exports = {
    env,
    logger
}