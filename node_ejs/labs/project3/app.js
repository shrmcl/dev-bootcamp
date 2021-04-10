const express = require('express');
const app = express()

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`listening on port ${port}.`)});