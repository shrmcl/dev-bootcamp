// project 1: check the answers

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
console.log(checkAnswers(correctAnswers, student1))
console.log(checkAnswers(correctAnswers, student2))