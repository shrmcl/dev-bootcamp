const express = require ('express');
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
const $fetch = require('node-fetch');
// to parse JSON:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


let myKey = 'k4YM6ZJZO2TtCxfCt2sDtfT3e2dlevnd';
let trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${myKey}&limit=6`
// let searched = '';
// let searchngUrl = `api.giphy.com/v1/gifs/search?q=${searched}&api_key=${myKey}&limit=5`

app.get('/', (req, res) => {
  // console.log(trendingUrl)
  $fetch(trendingUrl)
  .then(res => res.json())
  .then(data => {
    // console.log(data.data[0].images.downsized.url)
    // console.log(data.data[0].embed_url)
    res.render('home', {data: data.data})
  })
  }
)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));