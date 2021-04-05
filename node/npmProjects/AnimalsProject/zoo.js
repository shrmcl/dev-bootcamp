var animals = require('animals');
var Log = require('log.pets');
// get random animal
console.log(animals());
// display lion
Log.lion()
// display flag with names of animals
Log.zoo(animals(), animals(), animals())
// display # animals in generator
console.log("# of animals in generator: " + animals.words.length)
// display # animals beginning w/ G, or give error
let gAnimals = [];
animals.words.map(el=>{
    if (el.substring(0,2).toUpperCase === 'G') {
        gAnimals.push(el);
    }
})
let gMessage = (gAnimals > 0) ? console.log("# of animals starting with G: " + gAnimals.length) : console.log('No matches found')
console.log(gMessage)