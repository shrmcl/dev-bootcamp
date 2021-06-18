const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

const keys = require('./config/keys')
app.set('view engine', 'ejs');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("Connected to database"))
.catch((error) => console.log(error));
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/newsfeed', (req, res) => {
    res.render('newsfeed');
})


app.listen(3000, () => console.log('App is running on port 3000'))