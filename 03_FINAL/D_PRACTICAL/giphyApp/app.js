const express = require ('express');
const app = express();
app.set('view engine', 'ejs')
const $fetch = require('node-fetch');
// to parse JSON:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


let myKey = '73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS';
let trendingUrl = `api.giphy.com/v1/gifs/trending&api_key=${myKey}&limit=5`
let searchngUrl = `api.giphy.com/v1/gifs/search?q=${searched}&api_key=${myKey}&limit=5`

app.get('/', (req, res) => {
  $fetch(trendingUrl)
  .then(res => res.json())
  .then(data => {

  })
  }
)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));