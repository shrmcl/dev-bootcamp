var test = require('supertest')
var app = require('../server')

describe('3. POST todos', function(){
    it('a. should return 201 status code', function(done) {
        var data = {description: 'complete homework', isComplete: false}
        test(app)
        .post('/todos')
        // not 'required', just 'accepted'
        .set('Accept', 'applications/json')
        .send(data)
        // reg ex for case-insensitive, include string 'homework'
        .expect(/HOMEWORK/i, done)
    })
})