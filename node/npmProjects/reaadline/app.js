var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name?');
var food = readlineSync.question('What is your favorite food?');
var drink = readlineSync.question('What is your favorite drink?');
console.log(`Hi ${userName}, your favorite food is ${food} and your favorite drink is ${drink}.`)
