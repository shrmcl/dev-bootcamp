### I'd like to empty the array below. Please provide any 3 methods with examples and explain in brief, how to empty the provided array.

var myArray = [1, 2, 3, 4, 5] // it may have any number of elements

Hints:

- Method 1: overwrite the array with empty array (shown below, don't use this as your answer)
- Method 2: by the length property method
- Method 3: using the splice Array method
- Method 4: by popping each member of the array in a loop.
- Method 5: anything you come up with

### Sample Answer:

            myArray = []    // will replace the original myArray with an empty array

### Answer:
myArray = myArray.splice(0, -1, '')

// the .splice method will insert an empty space ('') starting at 0 and ending at the last element in the array (-1).

### Feedback: 
This doesn't do it. I tested it here https://codepen.io/piyushmehta/pen/ExZXXwj?editors=0011
and you can see results in the console.


myArray = myArray.slice(0,0)  

// the .slice method will return values starting with (and inlcuding) the first argument (0) and ending (but not including) the second argument (also 0). Because "0" is excluded, and the slice begins and ends at 0, the array is emptied.

### Feedback:
Even though it gets the job done, it is really like the first option above
where myArray is replaced by an empty array.
https://codepen.io/piyushmehta/pen/MWJooEd?editors=0011
