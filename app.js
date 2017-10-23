var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 8080;

app.use(express.static('public'));
app.use(express.static('src/views'));

http.listen(port, function(err) {
    console.log("Listening on port " + port);
});
