var express = require('express');
var app = module.exports = express();
require('./config')(app);

site = require('./app/controllers/index');
app.get('/ping', site.ping);

var port = process.env.PORT || 20000;
var http = require('http');
var server = http.createServer(app);
server.listen(port);
console.log("Express server listening on port %d", server.address().port);
