//-------------------------- VARIÁVEIS INICIAIS ------------------------------//
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 8080;
var io = require('socket.io')(http);

//-----------------------------------ARQUIVOS ESTÁTICOS-----------------------//
app.use(express.static('public'));
app.use(express.static('src/views'));

//-----------------------------------SERVER CONFIG----------------------------//
http.listen(port, function(err) {
    console.log("Listening on port " + port);
});

//---------------------------------EVENTOS------------------------------------//
io.on('connection', function(socket){
    console.log('Client connected.');
    socket.emit('ServerHandshake', {
        serverGreeting: 'Hi from ServerSide!'
    });
});
