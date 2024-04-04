const http = require('http');
const app  = require('./app');
const port = 5000;

//create the server

const server = http.createServer(app);

server.listen(port);