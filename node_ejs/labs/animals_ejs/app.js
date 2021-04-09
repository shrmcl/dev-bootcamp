const express = require('express')
const app = express()

const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs')

// tell app to use public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('I am root route.')
})

app.get('/animals', (req, res) => {
    res.render('animals')
})

// /demo/:animal
app.get('/demo/:animal', (req, res) => {
    let thing = req.params.animal;
    res.render('demo', {data: thing});
})

// /demo2
app.get('/demo2', (req, res) => {
    let animals = ['dog', 'cat', 'mouse', 'horse'];
    res.render('demo2', {data: animals})
})

// /test/animals
app.get('/test/animals', (req, res) => {
    let animals = [
        {
            breed: 'dog',
            name: 'Spike'
        },
        {
            breed: 'cat',
            name: 'Mr. Tabby'
        },
        {
            breed: 'bird',
            name: 'Tweety'
        }
    ]
    res.render('demo3', {data: animals});
})

app.get('*', (req, res) => {
    res.render('error');
})



const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on port ${port}`)})