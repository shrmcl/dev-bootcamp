const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
//    b) connect

// REQUIRE KEYS
const keys = require('./config/keys');
// CONNECTION
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log('Connected to database'))
.catch(error => console.log("Cannot connect to DB"));

// 2) Build blueprints
//    a) Schema
let todoSchema = mongoose.Schema({
  // mongoose will automatically ad the id
  // id: Number, 
  description: {
    type: String,
    required: [true, "Must have description!"]
  },
  isComplete: {
    type: Boolean,
    // by default the todo will need to be false (not done yet)
    default: false
  }
})
//    b) Model
let TodoModel = mongoose.model("Todos", todoSchema)
// 3) Build queries

// Read - GET
app.get("/todos", (req, res) => {
  TodoModel.find({}, (error, results)=>{
    if(error) {
      console.log("Error getting data from db: ", error)
    } else {
      console.log("Results: ", results)
      res.status(264).json(results);
    }
  })
});

// Create - POST
app.post("/todos", (req, res) => {
  let newTodo = new TodoModel({
    description: req.body.description,
  });
  newTodo.save((error, result)=>{
    if(error){
      console.log("Error: ", error)
    } else {
      console.log("Success: ", result)
      res.json(result);
    }
  })
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedTodoId = req.params.id);
  TodoModel.findByIdAndDelete(requestedTodoId, (error, result)=>{
    if(error){
      console.log("Error deleting from db: ", error)
    } else {
      console.log("Deleted: " result)
      res.json(result);
    }
  })
  res.json();
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedTodoId = req.params.id;
  // findById
    // get a result back
    // if error  
      // handle it
    // else
      // update 'iscomplete'
      // .save the new result
  requestedTodo.isComplete = !requestedTodo.isComplete;
  res.json(requestedTodo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));