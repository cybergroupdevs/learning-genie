var env = process.env.NODE_ENV || 'development'
console.log("***env:", env)

if (env === 'development') {
    process.env.PORT = 2018;
    process.env.MONGODB_URI = "mongodb://localhost:27017/learning-genie";
}
else if (env === 'production') {
    process.env.MONGODB_URI = "mongodb://admin:password777@ds012578.mlab.com:12578/learning-genie";
}

