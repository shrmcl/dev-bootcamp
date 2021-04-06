const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req, res)=> {
    res.send('I am the root route.')
})

app.get('/animals', (req, res)=> {
    res.send('I like animals.');
})

app.get('/animals/dogs', (req, res)=> {
    res.send('I like dogs.');
})

app.get('/animals/cats', (req, res)=> {
    res.send('I like cats.');
})

app.get('/animals/:first/:second', (req,res)=> {
    res.send(`I like ${req.params.first} but I do not like ${req.params.second}`);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));


