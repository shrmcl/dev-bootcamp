const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3080

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/results', function(req, res) {
    
    let characterNumber = req.query.userNumber
    let endpoint = 'https://swapi.dev/api/people/'

    fetch(endpoint + characterNumber)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            res.render('results.ejs', { data }) // TODO: change back!!
        })
        .catch(err => {
            console.log(err)
            res.render('error.ejs', { message: err })
        })
});

app.listen(PORT, function() {
    console.log(`Star Wars backend running on port ${PORT}`);
});