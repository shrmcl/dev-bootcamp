const express = require('express');
const app = express();
const chalk = require('chalk');
const logger = require('morgan');
app.use(logger('dev'));
// so that files in public folder are accessible
app.use(express.static('public'));
// so ejs files can be referred to without .ejs
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home')
})

const baseUrl = "https://api.lyrics.ovh/v1";
// tell app to use request module (now deprecated) to retrieve api data
const request = require('request');
// add a new route for when user clicks the button. this is connected via form attribute (action="getLyrics") in home.ejs
app.get('/getLyrics', (req, res) => {
  // console.log(req.query); 
  // req.query is what is created after a search input. contents follow the '?' in url.
  let {title, artist} = req.query;
  let endpoint = `${baseUrl}/${artist}/${title}`;
  request(endpoint, (error, response, body)=>{
    if(!error && response.statusCode == 200) {
      let parsedData = JSON.parse(body); // use with request and needle
      // console.log(parsedData);
      let data = parsedData.lyrics.replace(/\n/g, "<br>");
          // looks for things between forward slashes; 'g' looks for ALL (global)
      res.render('results', {data, title, artist})
    } else {
      res.render('error', {error: "No lyrics found"})
    }
  })
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(chalk.blue(`App on port: ${chalk.green(port)}`)));