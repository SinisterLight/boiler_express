var fs = require('fs'),
  path = require('path');

module.exports = function(directory) {
  var getFiles = function(obj, dir) {
    fs.readdirSync(dir).forEach(function(file){
      if (fs.statSync(path.join(dir, file)).isDirectory()){
        obj[file] = {};
        getFiles(obj[file], path.join(dir, file));
      }
      else if (/\.js$/.test(file)) {
        file = path.basename(file, '.js');
        obj.__defineGetter__(file, function(){
          return require('./' + path.join(dir, file));
        });
      }
    }); 
  };
  var object = {};
  getFiles(object, directory);
  return object;
};
