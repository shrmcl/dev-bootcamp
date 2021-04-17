const express = require('express');
const app = express();
const $fetch = require('node-fetch');
// tell app to see 'public' folder and contents
app.use(express.static('public'));
// set ejs environment
app.set('view engine', 'ejs');

const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
// root route handler
app.get('/', (req, res)=>{
    // res.send('I am the root route');
    
    res.render('index', {rate: '', symbol: ''});
})

app.get('/getPrice', (req, res)=>{
    
    // console.log(req.query);
    let country = req.query.country;
    $fetch(url)
    .then(res => res.json())
    // .then(json => console.log(json.bpi.USD.rate_float));
    
    .then(json => {
        let {rate_float, symbol} = json.bpi[country];
        res.render('index.ejs', {rate: rate_float.toFixed(2), symbol: symbol})
    })
})

// listener
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`))