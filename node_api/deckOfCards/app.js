const express = require('express');
const app = express();
const needle = require('needle');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index', {cards: []})
})

let endpoint = 'https://deckofcardsapi.com/api/deck/new/draw/?count=5'
app.get('/deal', (req, res) => {
    needle.get(endpoint, (error, data) => {
        // console.log(data.body.cards)
        if(!error && data.statusCode == 200) {
            res.render('index', {cards: data.body.cards});
        } else {
            res.render('error')
        }
    })
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));