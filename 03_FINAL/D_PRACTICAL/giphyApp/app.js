const express = require ('express');
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
const $fetch = require('node-fetch');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
// to parse JSON:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

let myKey = 'k4YM6ZJZO2TtCxfCt2sDtfT3e2dlevnd';
let trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${myKey}&limit=6`
// let searched = 'taco'; // temp search placeholder
// let searchingUrl = `https://api.giphy.com/v1/gifs/search?q=${searched}&api_key=${myKey}&limit=3` // temp search route
let searchingUrl = `https://api.giphy.com/v1/gifs/search?q=` 
// + searchTerm here
let searchingApi = `&api_key=${myKey}&limit=25`

app.get('/', (req, res) => {
  // console.log(trendingUrl)
  $fetch(trendingUrl)
  .then(res => res.json())
  .then(data => {
    // console.log(data.data[0].images.downsized.url)
    // console.log(data.data[0].embed_url)
    res.render('home', {data: data.data})
  })
  .catch(e => {
    console.log(e);
  });
  }
)

app.get('/gifSearch', (req, res) => {
  // console.log(req.body, req.query, req.params)
  // console.log('testing', req)
  const searchTerm = req.query.myInput;
  console.log(req.query.myInput)
  // will then search for requested search string here:
  // $fetch(searchingUrl)
  $fetch(searchingUrl + searchTerm + searchingApi)
  .then(res => res.json())
  .then(data => {
    // console.log(data.data[0].images.downsized.url)
    // console.log(data.data[0].embed_url)
    res.render('search', {data: data.data})
  })
  .catch(e => {
    console.log(e);
  });
  }
)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));