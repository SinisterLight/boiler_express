recursive_require = require('recursive-require');
controllers = recursive_require(__dirname + '/../app/controllers/');

module.exports = function(app) {
  app.get('/ping', controllers.index.ping);
};
