## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

ANSWER:
The code above sorts the elements in the array from lowest to highest.
To reverse the order, change "return roo-raa" to "return raa-roo".
(Alternatively, to reverse the order change to "return roo-raa" to "roo+raa".)


## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
    
ANSWER:
The "const pi" needs to be declared before being referred to in "var boundary = Math.pow(radius, 2) * pi".

Changing "const pi" to "var pi" would not help unless it is moved and declared before "var boundary = Math.pow(radius, 2) * pi".

<!-- Correct! 100% -->