var express = require('express');

module.exports = function(app) {
  app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '../public'));
    app.set('views', __dirname + '../app/views');
    app.set('view engine', 'ejs');
  });

  require('./enviorments')(app);
};
