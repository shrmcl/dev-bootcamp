const express = require('express');
const app = express();
const $fetch = require('node-fetch');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
})

// TMDB api key and endpoint 
// *** enter your TMDB API KEY below ***
let myKey = '[enter your api key here]';
let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + myKey + '&language=en-US&page=1'

app.get('/getMovies', (req, res) => {
   $fetch(url)
   .then(res => res.json())
   .then(json => {
    //    console.log(json.results)
 
    // json[results].forEach(element => {
        // do stuff here 
        // the movie title, overview, rating, and poster image. 
   
    // add the data variables to be passed into the ejs . i.e. {data: data}

    res.render('results', {data: json.results});
   })

})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on port ${port}`)})