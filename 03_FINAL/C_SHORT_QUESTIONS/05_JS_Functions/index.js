let first = "This is a string";
let second = "There was string"

// capture value of longest string
let chars = first.length >= second.length ? first.length : second.length;

let compareStrings = (x,y) => {
  let count = 0;
  // iterate through longest word (or if equal length, the 'x' length)
  for (let i = 0; i <= chars; i++) {
    if (x[i] !== y[i]) {
      count++;
    }
  }
  return `These strings have ${count} differences.`
}

console.log(compareStrings(first, second))

