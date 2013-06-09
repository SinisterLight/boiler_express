var express = require('express');

module.exports = function(app) {
  index = require('../app/controllers/index');
  app.get('/ping', index.ping);
};
