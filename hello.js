var http = require('http');
http.createServer(function (req,res)
{
	res.writeHead(200,{'Content-Type' : 'text/html'});
	res.end('<h1>Hello World! My Name is Mayu</h1>');
}).listen(8000);
