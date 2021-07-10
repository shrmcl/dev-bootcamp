function doubleInt(num) {
    if(typeof num !== 'number'){
        // create exception
        // throw "not a number"
        throw new Error("not a number")
    }
    return num * 2
}

console.log(doubleInt(2))

function helper(){
    return true
}

// export this function
// to be 'required' in the file we need to use it
module.exports = doubleInt

// types of errors:
// 1. exception (code violates some business rule)
// 2. error
    // syntax (code is not formed correctly)
    // logical (code doesn't work correctly)