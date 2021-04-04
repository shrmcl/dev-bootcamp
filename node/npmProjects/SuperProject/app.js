var marvel = require('marvel-characters')

// a. Get a random character to show in the terminal.
console.log(marvel());
//  Using various array methods:
//  b. Display the number of characters in the database
console.log(marvel.characters.length)
//  c. Display only characters whose names start with "Man" in your terminal, or an error message if does not exist.
let onlyMan = [];
marvel.characters.map(el => {
    if (el.substring(0,3) == 'Man') {
        onlyMan.push(el)
    }})
console.log(onlyMan)
//  d. Display “Iron Man” in your terminal, or an error message if does not exist
let ironMan = (marvel.characters.indexOf('Iron Man') >= 0) ? 'Iron Man' : 'Does not exist.';
console.log(ironMan)
//  e. Display “Batman” in your terminal, or an error message if does not exist
let batman = (marvel.characters.indexOf('Batman') >= 0) ? 'Batman' : 'Does not exist.';
console.log(batman)