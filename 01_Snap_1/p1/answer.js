let returnedNums = "";
for(i = -10; i <= 10; i++) {
    if( i % 3 === 0) {
        returnedNums = returnedNums
    } else {
        returnedNums = returnedNums + " " + i
    }
}
console.log(returnedNums);