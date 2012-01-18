var http = require('http');
var util = require('util');
var connect = require('connect');
var path = require('path');

var PORT = 4000;

var server = connect.createServer(
		connect.logger('dev'),
		connect.static(path.join(__dirname, '..', '_site'), { maxAge: 60000 }),
		connect.staticCache()
);

console.log("Server started on port: " + PORT);

server.listen(PORT);