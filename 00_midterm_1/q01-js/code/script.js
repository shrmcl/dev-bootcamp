// get reference to the first input element
var firstNum = document.getElementById("first")

// get reference to the second input element
var secondNum = document.getElementById("second")

// get reference to the submit input element which
// looks like a button
var btn = document.querySelector("input[type='submit']")

// get reference to the area where you will place the
// answer to the calculation
var msg = document.querySelector("#message")


// attach a handler function to the button which
// calculates the result of multiplication and 
// displays the result
btn.onclick = function(){
   let answer = myCalc(firstNum, secondNum)
   msg.innerText = `The answer is ${answer || ''}`
}

// perform the calculation ... here it multiplies the
// two inputs into the function.  Having a separate function
// allows the developer to change the calculation without
// requiring to change other code.
const myCalc = function(a, b) {
   console.log(a*b);
} 
