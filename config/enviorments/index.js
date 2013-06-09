module.exports = function(app) {
  switch(process.env.NODE_ENV){
    case 'production':  return require("./production")(app);
    case 'development': return require("./development")(app);
    case 'test':        return require("./test")(app);
    default :           return require("./development")(app);
  }  
};
