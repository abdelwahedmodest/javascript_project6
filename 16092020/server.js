
var   express = require("express");
var  app = express();
var  path = require("path");

var  http = require("http").createServer(http);

var ioServer = require("socket.io")(http);


ioServer.on("Connection", function(client){

    console.log("client connected");
    
    var timer = setInterval(function(){

        ioServer.emit("sendingmsg", Math.random());
        //ioServer.emit -->client
        //ioServer.sockets.emit -->all
        //client.broadcast.emit -->all except client


    }, 1000 );
     
})


