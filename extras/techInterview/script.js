// NEED TO WORK ON:
    // QUICKLY WRITING A FUNCTION! :) !!!!!
    // CONVERTING DATA TYPES / CHAINING METHODS !!!!!


// PROBLEM 1
// // Using JavaScript, write a program that console log the numbers from 5 to 100. But for multiples of 7 print “Hello” instead of the number and for the multiples of 5 print “JM”. For numbers which are multiples of both 5 and 7 log “Hello JM”. You have appox. 15 min

let results = [];
function myFunction() {
    for (let i = 5; i <= 100; i++) {
        if (i % 5 === 0 && i % 7 === 0) {
            results.push("Hello JM") 
        } else if ( i % 7 === 0) {
            results.push("Hello") 
        } else if ( i % 5 === 0) {
            results.push("JM") 
        } else {
            results.push(i) 
        }
    }
    return results.join('\n');
}

console.log(myFunction())

    

// PROBLEM 2
// Write a JavaScript function that reverses a number.
// For example, x = 32243;
// Expected Output : 34223

// let myFunc = (num) => {
// //   let reversed = [];

// //   for(let i=0; i<= num.length; i++) {
// //     reversed.unshift(num[i])
// //   }
//     return Number(num.toString().split('').reverse().join(''))

// }

// console.log(myFunc(19393222))