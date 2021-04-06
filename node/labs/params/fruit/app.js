const express = require('express')
// create an instance of express
const app = express()
const logger = require('morgan')
// to use morgan
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('I am root route.');
  })

app.get('/fruit/:fruits', (req, res)=>{
    // retrieve requested params from the 'params' object in the 'req' object
    console.log(req.params.fruits);
    res.send(`I like ${req.params.fruits}.`)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Running on port ${port}`));