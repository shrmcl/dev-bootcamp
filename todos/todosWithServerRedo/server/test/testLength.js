var lengthFn = require('../length')
var assert = require('assert')

describe('1. Length function', function(){
    // actually carries out the test
    it('a. should return length of argument passed', function(){
        let result = lengthFn('2') // one test
        assert.strictEqual(result, 1)
    })
})