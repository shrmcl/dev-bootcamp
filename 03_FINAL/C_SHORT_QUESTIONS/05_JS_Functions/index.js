let first = "This is a string";
let second = "There was string"

let compareStrings = (x,y) => {
  // check that both args are strings
  if (typeof x != 'string' || typeof y != 'string') {
    return "do not use data types other than strings!"
  }
  // capture value of longest string
  let chars = x.length >= y.length ? x.length : y.length;
  let count = 0;
  // iterate through longest word (or if equal lengths, the x argument)
  for (let i = 0; i <= chars; i++) {
    if (x[i] !== y[i]) {
      count++;
    }
  }
  return `These strings have ${count} differences.`
}

console.log(compareStrings(first, second))

