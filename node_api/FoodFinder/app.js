const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})
 



const yelp = require('yelp-fusion');
const apiKey =
  "TGmj7XiFfyILe004o67z3COKqqat0-RPorHfIepxlF1mCRCUBSy7gIwcUJaATMMO0c0MIeINi8qbQ44tWt-yYsYk2aWto0n0GrDyjQ0A7Jft5ZV6xRTJDGPNckAgW3Yx";
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