const socketIo = require('socket.io');

const {User} = require('../models');

const socket = function (server) {
    let io = socketIo(server);

    io.on('connection', (socket) => {
        process.logger(socket.client.id);
        socket.emit('clientId', {"clientId": socket.client.id})
        socket.on('joinroom', (data) => {
            User
                .findOne({token})
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

    return io;
}

module.exports = {
    socket
};
