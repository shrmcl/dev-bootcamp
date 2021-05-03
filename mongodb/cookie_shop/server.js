const express = require('express');
const app = express();

const keys = require('./config/keys');

// CONNECTION
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log('Connected to database'))
.catch(error => console.log("Cannot connect to DB"));

// BLUEPRINTS
let cookieSchema = mongoose.Schema({
    name: String,
    price: Number,
    tasty: Boolean
  })

let cookieModel = mongoose.model("sm_product", cookieSchema);

// QUERIES
const Cookie = new cookieModel({
    name: 'snickerdoodle',
    price: 8.00,
    tasty: false
})

const Cookie1 = new cookieModel({
    name: 'sugar cookie',
    price: 1.00,
    tasty: false
})

Cookie.save((error, cookie)=>{
    if(error){
        console.log("Error saving the cookie")
    } else {
        console.log("cookie info: ", cookie)
    }
})

Cookie1.save((error, cookie)=>{
    if(error){
        console.log("Error saving the cookie")
    } else {
        console.log("cookie info: ", cookie)
    }
})

cookieModel.create({name: "choclate chip", price: 4.75, tasty: true}, (error, cookie)=>{
    if(error){
        console.log("Error saving the cookie")
    } else {
        console.log("cookie info: ", cookie)
    }
})


// cookieModel.find()

app.get('/', (req, res) => {
    res.send('i am root route.');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`))