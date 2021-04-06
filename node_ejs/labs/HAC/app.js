const express = require('express');
const app = express();
 
// using below would allow to use 'home' instead of 'home.ejs' below
// app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.send('Root Route')
})

app.get('/home', (req, res)=> {
    res.render('home.ejs');
})

app.get('/about', (req, res)=> {
    res.render('about.ejs');
})

app.get('/contact', (req, res)=> {
    res.render('contact.ejs');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`I am listening on port ${port}.`));