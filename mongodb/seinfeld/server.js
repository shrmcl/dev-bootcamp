const express = require('express');
const app = express();

const keys = require('./config/keys');

// CONNECTION
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log('Connected to database'))
.catch(error => console.log("Cannot connect to DB"));

// BLUEPRINTS
let userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String
})

let UserModel =  mongoose.model("sm_users", userSchema)

let User = new UserModel({
  name: "Jerry",
  age: 45,
  email: "jerryseinfeld@gmail.com"
})

User.save((err, user)=>{
//   if(err){
//     console.log('Error!!!')
//   } else {
//     console.log(user)
//   }
// })

// NOTE: same as code above BUT only should be used for demo purposes
// In production, you are prob going to send this user data somewhere
// and will need to res.send(), res.render(), res.json(), etc...
console.log(err ? "Error creating document" : "User created: " + user);
})

UserModel.create({name: "Elaine", age: 37, email: 'elainebenes@gmail.com'
}, (err, user) => {console.log(err ? "Error creating document" : "User created: " + user)})


User.find({}, (err, users)=>{
    console.log(err ? "error reading doc" : "users found: + user");
})

app.get('/', (req, res)=> {
  res.send('I am Groot')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App on port ${port}`))