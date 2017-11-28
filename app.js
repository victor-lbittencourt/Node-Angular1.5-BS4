//-------------------------- VARIÁVEIS INICIAIS ------------------------------//
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 8080;
var io = require('socket.io')(http);

//-----------------------------------ARQUIVOS ESTÁTICOS-----------------------//
app.use(express.static('public/js'));
app.use(express.static('public/styles'));
app.use(express.static('src/views'));
app.use(express.static('node_modules'));

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
