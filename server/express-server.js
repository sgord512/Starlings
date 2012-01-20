var express = require('express');
var fs = require('fs');
var app = express.createServer();
var PORT = 4000;
var oneDay = 864000;

app.use(express.logger('default', fs.createWriteStream('http_log')));
app.use(express.static(path.join(__dirname, "..", "_site"), { maxAge: oneDay });
app.use(express.staticCache());

console.log("Server started on port: " + PORT);

app.listen(PORT);