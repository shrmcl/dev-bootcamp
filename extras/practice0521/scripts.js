// Write a JavaScript function that reverses a number. 
// For example, x = 32243;
// Expected Output : 34223

let num1 = 12345555508;
let num2 = parseInt(num1.toString().split('').reverse().join(''));
console.log(num2)


// Write a JavaScript function that reverses a number. 
// For example, x = 322.43;
// Expected Output : 342.23      


// Write a JavaScript function which accepts an argument and returns the type of the argument provided.

function dataType (name) {
  return typeof(name)
}


// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  `
// * * * *  
// * * * * *

function looper() {
    let stars = "*";
    for(let i=1; i<=5; i++) {
        console.log(stars)
        stars += "*"
    }
    
}
looper()