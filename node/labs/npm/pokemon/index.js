const pokemon = require('pokemon')

let poke = pokemon.random()


let pokeArray = [];
for(let i=0; i < 5; i++){
    pokeArray.push(pokemon.random());
}

console.log(pokeArray)
