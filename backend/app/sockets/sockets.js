const socketIo = require('socket.io');
const  authHelper  = require('../controllers/authHelper');
const {User} = require('../models');

const socket = function (server) {
    let io = socketIo(server);

    io.on('connection', (socket) => {
        process.logger(socket.client.id);
        socket.emit('clientId', {"clientId": socket.client.id})
        socket.on('joinroom', (data) => {
            let token = authHelper.getToken(data.token);
            User
                .findOne({token})
                .populate('team')
                .then((user,err) => {
                    if (user) {
                        for (let i in user.team)
                        socket.join(user.team[i].teamName);
                        //process.logger("room joined:"+user.team[i].teamName);
                    } else {
                        socket.emit('roomjoinfailed');
                    }
                })
        })
        socket.on('disconnect', function (req, res) {
            // req.session.destroy();
        });
    });

    return io;
}

module.exports = {
    socket
};
