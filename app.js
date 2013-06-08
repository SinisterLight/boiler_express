var express = require('express');
var app = module.exports = express();
require('./config');

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'ejs');
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

site = require('./app/controllers/index');
app.get('/ping', site.ping);

var port = 20000;
var http = require('http');
var server = http.createServer(app);
server.listen(port);
console.log("Express server listening on port %d", server.address().port);
