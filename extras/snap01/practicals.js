// P2 
// Write a JavaScript function which will take an array of numbers and return the second highest and second lowest numbers, respectively.
// For example: [1,2,3,4,5]
// Expected Output : 2,4

// ANSWER:
// let x = [9,4,10,3,2000,4,24];

// (x) => {
//     // use a compare function to handle ASCII values and sort numerically instead
//     let y = x.sort(function(a,b){return a-b});
//     // return 2nd and 2nd from last numbers in list
//     return y[1] + ',' + y[y.length-2];
// }


// P3
// Write a JavaScript function that accepts a sentence as a parameter and returns the longest word within the sentence.
// Example Input: longestWordFunction("A quick brown fox jumps over the lazy dog")
// Example Output: quick
// Note: returning any of the longest words is acceptable, you don't have to return all of them.
// Here in this sentence there are 3 longest words .. quick, brown and jumps

// ANSWER:


longestWordFunction = (sen) => {
    let wordList = sen.split(' ');
    let longest = wordList[0];
    for(i = 1; i < wordList.length; i++) {
        if(wordList[i].length > longest.length) {
            longest = wordList[i];
        } 
    }
    console.log(longest)
}

let sentence = "A quick brown fox jumps over the lazy dog"
longestWordFunction(sentence);
