var test = require('supertest')
var app = require('../server')

describe('1. GET todos', function(){
    it('a. should return 200 status code', function(done) {
        test(app)
        .get('./todos')
        // search for string 'json' (regular expressions)
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
})