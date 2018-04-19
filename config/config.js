var env = process.env.NODE_ENV || 'development'
console.log("***env:", env)

if (env === 'development') {
    process.env.PORT = 2018;
    process.env.MONGODB_URI = "mongodb://localhost:27017/learning-genie"
    process.env.Redis_opts= {
        host:"127.0.0.1",
        port: 6379
    }
}
else if (env === 'production') {
    process.env.MONGODB_URI = "mongodb://admin:password777@ds012578.mlab.com:12578/learning-genie"
    process.env.Redis_opts={
        host:"redis-19917.c12.us-east-1-4.ec2.cloud.redislabs.com",
        port:19917,
        password:"ToC1WFgyqdAn0UHM9T1XXkM3w4n3irp9"}
}

