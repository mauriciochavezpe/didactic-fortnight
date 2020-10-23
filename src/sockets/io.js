const socketIO = require('socket.io');

const socket = (server) => {
    const io = socketIO(server);
    io.on('connection', (client) => {

        console.log(`Usuario conectado`);
        client.on('disconnect', () => {
            console.log(`Usuario desconectado`);
        })
        // listening(name,body,callback)
        client.on('mensaje', (msg, callback) => {
            console.log(msg);

            client.broadcast.emit("mensaje", msg);

            // if (msg.mensaje) {
            //     callback({
            //         message: "Envio exitoso",
            //         yapa: "JEJE"

            //     })
            // } else {
            //     callback({
            //         message: "Envio no exitoso",
            //         yapa: "JEJE XD"
            //     })
            // }
        })
    })
}

module.exports = socket;