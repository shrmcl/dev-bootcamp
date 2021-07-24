Consider the following code.  What would be console logged?  Why is apple type reported incorrectly?

What would you change to address this issue (the Apple type is mis-represented in the last line below)?

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)

ANSWER: When 'orange' is created, it is pointing to the exact same object reference as 'apple'. Both 'orange' and 'apple' now represent the same object. Changing values in either variable will change the values of the object they both represent. To clone 'apple' in this example, and save as a separate object name 'orange', I would use a spread operator like so: 
    var orange = {...apple}
This creates a shallow copy suitable for this problem.




Why does this comparison return false?  Please explain.

    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?

ANSWER: school_a and school_b are 2 distinct objects with separate references ('addresses' as a metaphor).Despite containing equivalent data, they point to different references.
