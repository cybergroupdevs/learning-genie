const routes = require('./app/routes');

const app = require('express')();
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

let session = require('express-session')({
    secret: '0dc529ba-5051-4cd6-8b67-c9a901bb8bdf',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false
    }
});

const { User } = require('./app/models/User');

app.use(session);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth");
    next();
});

const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

const server = http
    .createServer(app)
    .listen(port, (p) => {
        process.logger(`app live on ${port}`);
    });

let io = socketIo(server);

io.on('connection', (socket) => {
    process.logger(socket.client.id);
    socket.emit('clientId', { "clientId": socket.client.id })
    socket.on('joinroom', (data) => {
        User
            .findOne({ token })
            .then((user) => {
                if (user) {
                    socket.join(user.team)
                } else {
                    socket.emit('roomjoinfailed');
                }
            })
    })
    socket.on('disconnect', function (req, res) {
        // req.session.destroy();
    });
});

app.use(routes.apiBaseUri, routes.api(app));
