let myArray = [4, false, 'boy'];

// APPEND METHODS:

// 1.
myArray.push("baby");

// 2. if array length is already known:
myArray[4] = 'babies';

// 3.
myArray.length;
myArray[myArray.length+1] = "babes";

// 4.
myArray.splice(myArray.length, 0, 'babs');


// REMOVE METHODS:

// 1. remove last item in the array:
myArray.pop();

// 2. remove first item in array:
myArray.shift();

// 3. remove a single item from index 2
myArray.splice(2, 1)



// ### Feedback:
// 1st answer is correct.
// 2nd answer is not answering the question. The question says how to remove a specific element.
//    The 3rd option of splice is correct. The first two are not relevant.
// Score: 2.5 / 3.0