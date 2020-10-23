var socket = io();
socket.on('connect', function () {
    console.log("conectado al servidor")
});

socket.on('disconnect', function () {
    console.log("Desconectado del servidor")
})
//Emitir(name,body,response)
socket.emit("mensaje", {
    mensaje: "holaa",
    createAt: new Date().toISOString()
}, function (res) {
    console.log("mensaje recibido", res);

})
socket.on("mensaje", function (res) {
    console.log("mensaje recibido", res);

})