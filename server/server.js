var http = require('http');
var util = require('util');
var connect = require('connect');
var path = require('path');



var server = connect.createServer(
		connect.logger('dev'),
		connect.static(path.join(__dirname, '..', '_site'), { maxAge: 60000 })
);

console.log("Server started.");

server.listen(4000);