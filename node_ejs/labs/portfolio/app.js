const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));
app.set('view engine', 'ejs');

app.get('/' (req, res) => {
    res.send('i am root');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on port ${port}`)})