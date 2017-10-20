var fs = require('fs');
var http = require('http');
const os = require('os');
var user = os.userInfo();

console.log('Starting file');
fs.appendFile('greetings.txt', `Hello, ${user.username}!` , function(err){
    if(err){
        console.log('Unable to append string.');
    }
    if(!err){
        console.log('Append successfull');
    }
});
