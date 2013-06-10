var conrtrollers = require('./recursive_require');

module.exports = function(app) {
  app.get('/ping', conrtrollers.index.ping);
};
