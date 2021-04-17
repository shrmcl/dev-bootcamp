const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

const yelp = require('yelp-fusion');
const apiKey ="[insert my API key]"; // *** add api key
const client = yelp.client(apiKey);


app.get('/locationSearch', (req, res) => {
    client.search({
        location: req.query.locale, // via the form submit 
        limit: 10
      }).then(response => {
          let results = response.jsonBody.businesses;
        console.log(response.jsonBody.businesses);
        res.render('results', {data: results});
      }).catch(e => {
        console.log(e);
      });
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}.`))