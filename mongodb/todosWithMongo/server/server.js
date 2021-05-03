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

// CONNECTION
const keys = require('./config/keys');

const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log('Connected to database'))
.catch(error => console.log("Cannot connect to DB"));


// 2) Build blueprints
//    a) Schema
//    b) Model
// 3) Build queries
//    a) Read with Mongoose
//    b) Create with Mongoose
//    c) Delete with Mongoose
//    d) Update with Mongoose

const { toDoArray } = require("./fakeData");

// Read - GET
app.get("/todos", (req, res) => {
  res.status(264).json(toDoArray);
});

// used temp for creating a a unique idea
let newId = 4;

// Create - POST
app.post("/todos", (req, res) => {
  let newTodo = {
    id: newId++,
    description: req.body.description,
    isComplete: false,
  };
  toDoArray.push(newTodo);
  res.json(newTodo);
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedTodoId = parseInt(req.params.id);
  let requestedTodoIndex = toDoArray.findIndex((todo) => {
    return todo.id === requestedTodoId;
  });
  toDoArray.splice(requestedTodoIndex, 1);
  res.json(toDoArray);
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedTodoId = parseInt(req.params.id);
  let requestedTodo = toDoArray.find((todo) => {
    return todo.id === requestedTodoId;
  });
  requestedTodo.isComplete = !requestedTodo.isComplete;
  res.json(requestedTodo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
