const http = require('http');
const express = require('express');
const path = require('path');

// Create Express Server
const app = express();
app.use(express.json());
// Set up serving static files
app.use(express.static("express"));

// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
