// to run this test, enter 'mocha' in command line

// assertion library
// install as dev dependency (npm i supertest --save-dev)
// var test = require('supertest')
var double = require('../double')
// // assert function from node
var assert = require('assert')
    // 'assert' asserts what it expects

// first set of tests
    // first arg: describe the test
    // second arg: function that does testing
describe('1. Double function', function(){
    // actually carries out the test
    it('a. should return a double integer', function(){
        let result = double(2) // one test
        assert.strictEqual(result, 4)
    })
    it('b. should return double of a negative integer', function(){
        let result = double(-2) // one test
        assert.strictEqual(result, -4)
    })
    it('c. should throw an exception if arg is not a number', function(){   
        // this test is intended to 'fail', which would then be 'passing'
        assert.throws(function(){
            double('2')
        })
    })
})