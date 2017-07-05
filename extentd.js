const http = require('http');
const hostname = '39.108.216.96';
const port = 22;
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});