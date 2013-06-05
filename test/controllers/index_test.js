var request = require('supertest');
var app     = require('../../app');
var should  = require('should');

describe('GET /ping', function(){
  it('respond with 200 ok', function(done){
    request(app)
      .get('/ping')
      .expect(200, 'Ahoy!', done);
  })
});
