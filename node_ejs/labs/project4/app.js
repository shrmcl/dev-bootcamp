const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// make 'public' folder seen
app.use(express.static('public'));

const {data} = require('./data');

app.get('/', (req, res) => {
    res.render('home', {data});
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}.`))