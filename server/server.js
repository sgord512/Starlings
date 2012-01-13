var http = require('http');
var util = require('util');
var node_static = require('node-static');




var server = http.createServer(function(request, response) {
		var fileServer = new(node_static.Server)('../_site');
		request.addListener('end', function() {
				// response.writeHead(200, {
				//		'Content-Type': 'text/plain'
		    //});
				//response.write(util.inspect(request, false, null, true));
				//console.log(util.inspect(request, false, null, true));
				//response.end();
				fileServer.serve(request, response);
		});
});

console.log("Server started.");

server.listen(8000);