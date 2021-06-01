// PROJECT 1: check the answers

let correctAnswers = ["c", "d", "e", "a", "a", "a", "b", "", "f", "o"]
let student1 = ["c", "d", "e", "a", "a", "a", "b", "", "f", "o"]
let student2 = ["c", "a", "a", "b", "", "f", "b", "", "f", "z"]

checkAnswers = (arr1, arr2) => {
    let score = 0;
    for(let i = 0; i <= arr1.length; i++) {
        if(arr1[i] === arr2[i]) {
            score += 4;
        } else if (arr2[i] === "") {
            score = score
        } else {
            score -= 1
        }
    }
    return score
}

// test with node.js
console.log("score for student 1: " + checkAnswers(correctAnswers, student1))
console.log("score for student 2: " + checkAnswers(correctAnswers, student2))


// PROJECT 2: blood alcohol calculator
// provided BAC formula: BAC% = (A × 5.14 / W × r) - 0.015 × H
// A: Total alcohol consumed, in ounces (oz) 
//     Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), 
//     and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). 
//     For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.
// W: Body weight, in pounds (lbs) 
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women 
//     The gender will be passed as a string, either "male" or "female".
// H: Time passed since drinking, in hours

let bobDrinks = {
    ounces: 40 , // number in ounces
    abv:  0.054 // number with dec.
}
let bobGender = "male";
let bobWeight = 202 ; // number in pounds
let bobTime = 3; // number in hours

let maryDrinks = {
    ounces: 14 , // number in ounces
    abv:  0.045 // number with dec.
}
let maryGender = "female";
let maryWeight = 146 ; // number in pounds
let maryTime = 0.5; // number in hours

const bacCalc = (consumption, gender, weight, time, drinkerName) => {
    let ratio = gender === "male" ? 0.73 : 0.66;
    let result =  (consumption.ounces * consumption.abv * 5.14 / (weight * ratio)) - 0.015 * time
    console.log(`the blood alcohol content for ${drinkerName} is ${result.toFixed(4)}`)
}

bacCalc(bobDrinks, bobGender, bobWeight, bobTime, "bob")
bacCalc(maryDrinks, maryGender, maryWeight, maryTime, "mary")


// PROJECT 3: sort my pets
// sort array of objects based on the value of "daily food quantity"

var myPets = [
    {   
        "type": "camel",
        "name": "Wednesday",
        "age": 8,
        "food": "Hay, mostly",
        "daily food quantity": 30
    },
    {
        "type": "cobra",
        "name": "Slitherio",
        "age": 2,
        "food": "Rodents",
        "daily food quantity": 0.05
    },
    {   
        "type": "elephant",
        "name": "Hathi",
        "age": 1,
        "food": "Plant matter, grass, hay, fruit",
        "daily food quantity": 50
    }
]

let sortedPets = myPets.sort((a, b) => a["daily food quantity"] - b["daily food quantity"]);
console.log("pets, sorted: ", sortedPets);