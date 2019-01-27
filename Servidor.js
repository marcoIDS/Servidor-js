//var os = require('os')
const net = require('net')
const express = require('express')
let app = express()

let server = require('http').Server(app)
let io = require('socket.io')(server)
const HOST = "192.168.0.12"
const PORT = "3000"


io.on('connection', function(socket){
    console.log("Conectado" + socket)
})

/*
server.listen(PORT, function(){
    console.log("Servidor Activo" + PORT)
})
*/

net.createServer(function(sock){
    console.log("Conectado" + sock.remoteAddress + ":" + sock.remotePort)
    sock.on("data", function(data){
        console.log(data)
    })

    sock.on('close', function(){
        console.log('desconectado')
    })

}).listen(PORT, HOST)

