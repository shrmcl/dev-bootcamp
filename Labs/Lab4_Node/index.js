const express = require('express');
const app = express();
// Reuire the data from the data.js file
// using desctructing to only import the zoo object from data
const {zoo} = require('./data')
// test if the data is imported via console
console.log(zoo[4].name);
// Create a root route handler that sends the data from above to browser
// 1. Test with Postman
// 2. Test with CURL
// 3. Test with the browser
app.get('/', (req, res)=>{
    res.send(zoo);
})
// Build a route handler for /names that sends back h1-encased names of all the animals
// Results should be:
                //  "Name: <name of the animal>"
app.get('/names', (req, res)=>{
    
    let result = zoo.map(el => {
        return `<h1>${el.name}</h1>`
    })
    // transfrom array to string with .join
    res.send(result.join(''))

})
// Build a route handler for /types that sends back h1-encased types of all the animals
// Encase the name of the animal in an h2 tag
// Results should be:
                //  "Type of animal: <type of animal>"
                //  "Name: <name of the animal>"

// Build a route handler for /owner that sends back h1-encased owner of all the animals
// Encase the name of the animal in an h2 tag
// Results should be:
                //  "Owner: <owner of the animal>"
                //  "Name: <name of the animal>"

// Build a route handler for /contact that sends back h1-encased name of all the animals
// Encase the owner of the animal in an h2 tag
// Encase the owner's phone number of the animal in an h3 tag
// Results should be:
                //  "Name: <name of the animal>"
                //  "Owner: <owner of the animal>"
                //  "Phone: <phone # of the owner of the animal>"

// Build a route handler for /friendly that sends back h1-encased result as follows:
                //  "<name of the animal> will make a good pet: (Yes or No depnding on isPet key)"

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`App listening on port: ${port}`));

