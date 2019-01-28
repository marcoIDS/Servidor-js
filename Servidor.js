console.log("Hola Node")
var express = require('express')
var app = express()

var server = require('http').Server(app)
var io = require('socket.io')(server)
//var os = require('os')
//var net = require('net')

//var interfaces = os.networkInterfaces();
//var addresses = [];

/*for(var k in interfaces){
    for(var k2 in interfaces[k]){
        var address = interfaces[k][k2];
        if(address.family == "IPv4" && !address.internal){
            console.log(address.address);
            addresses.push(address.address);
        }
    }
}*/

//var HOST =  String(address.address);//'192.168.13.161'
var PORT = process.env.PORT || 3000;
app.get("/",function(reg,res){
    res.send("Welcome to NodeJS App on Heroku")
})
app.use(express.static('client'))
//var sockets = [];
io.on('connection',function(socket){
    console.log("Conectado: "+ socket )
})

server.listen(PORT, function(){
    console.log("Servidor activo: " + PORT)
})

/*net.createServer(function(sock){ //Funcion principal que contiene subFunciones
    console.log("Conectado Servidor creado"+ sock.remoteAddress + ':' + sock.remotePort)
    sock.on('data' ,function(data){
        console.log(data)
    })
    sock.on('close', function(){
        console.log("Desconectado")
    })
}).listen(PORT,HOST)*/



