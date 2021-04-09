const express = require('express');
const app = express();

const pizza = 'I like my pizza with extra pineapple.'
const cappucino = 'I like my cappucino to be sweet.'
const fries = 'I like my fries crispy with extra salt.'

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home', {data: pizza});
})

app.get('/about', (req, res) => {
    res.render('about', {data: cappucino});
})

app.get('/contact', (req, res) => {
    res.render('contact', {data: fries});
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`listening on ${port}`)})