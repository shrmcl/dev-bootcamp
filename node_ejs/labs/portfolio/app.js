const express = require('express');
const app = express();

// creates the array using deconstruction from projectData.js
// w/o deconstruction it would return the object, not the array inside the object
const {data} = require('./helpers/projectData');

const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
// make 'public' folder seen
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send('I am Groot.')
})

app.get('/home', (req,res)=> {
    res.render('home', {data: data})
})
 
app.get('/about', (req,res)=>{
    res.render('about')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on port ${port}`)})