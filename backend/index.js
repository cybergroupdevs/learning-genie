const app = require('express')();
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const {socket} = require('./app/sockets');
const routes = require('./app/routes');

const {session} = require('./config/config');

app.use(session);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth");
    if(req.headers.origin == "http://app-learning-genie777.herokuapp.com")
    {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
        res.header("Access-Control-Allow-Credentials", true);
    }
    else
    {
        res.header("Access-Control-Allow-Origin", "*");
    }
    next();
});

app.use(bodyParser.json());

const port = process.env.PORT;

const server = http
    .createServer(app)
    .listen(port, (p) => {
        process.logger(`app live on ${port}`);
    });

const io = socket(server);

app.use(routes.apiBaseUri, routes.api(app, io));
