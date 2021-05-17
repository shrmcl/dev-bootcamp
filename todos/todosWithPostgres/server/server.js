const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO POSTGRES
// 1) Build our connection
//    a) install PG
//    b) connect

// CONNECTION
const PG = require("PG");

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
  let requestedTodoId = req.params.id;
  TodoModel.findByIdAndDelete(requestedTodoId, (error, result)=>{
    if(error){
      console.log("Error deleting from db: ", error)
    } else {
      console.log("Deleted: ", result)
      res.json(result);
    }
  })
  res.json();
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedTodoId = req.params.id;
  // need to find the document matching our id
  TodoModel.findById(requestedTodoId, function (error, result) {
    // if id does not exist, let the client know
    if (error) res.status(447).send("id does not exist for updating");
    //  when we get the "receipt" from the database, it is now called result
    // need to toggle the boolean value
    else result.isComplete = !result.isComplete;
    // NOW, we can save the new updated document
    // this will replace the ENTIRE document in mongo with current data
    result.save(function (err, updatedTodo) {
      if (err) res.status(448).send("Cannot update document");
      else res.status(202).send(updatedTodo);
    });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
