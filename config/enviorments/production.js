var express = require('express');

module.exports = function(app) {
  app.configure('production', function(){
    app.use(express.errorHandler());
  });
};
