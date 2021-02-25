var fname = prompt("Tell me your name.");
var num1 = prompt("Give me a number.");
var num2 = prompt("Give me another number.");

function nameNum() {
    return "You are going to have a wonderful day, " + fname + ". ";
}

function newNum() {
    var numSum = Number(num1) + Number(num2);
    return "By the way, the sum of your numbers is " + numSum + ".";
}

var greeting = nameNum();
var sum = newNum();



document.write(greeting + sum);