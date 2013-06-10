recursive_require = require('./recursive_require');
controllers = recursive_require(__dirname + '/../app/controllers/');

module.exports = function(app) {
  app.get('/ping', controllers.index.ping);
};
