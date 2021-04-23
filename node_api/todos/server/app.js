const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

// NOTE: replaced with built-in express methods
// const bodyParser = require('body-parser');
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const {toDoArray} = require('./fakeData')

app.use(express.static('../client'));
// NOTE: Do not need if using above line of code
// app.get('/', (req, res)=>{
//   res.send('Root route.')
// })

// Read - GET 
app.get('/todos', (req, res)=>{
  res.status(264).json(toDoArray);
})

// Create - POST
app.post('/todos', (req, res)=>{
  console.log(req.body);

  let newTodo =  {
    id: 4,
    description: req.body.description,
    isComplete: false
  }
  toDoArray.push(newTodo);
  res.json(newTodo);
})

// Delete - DELETE
app.delete( '/todos/:id', (req, res)=>{
  let requestedTodoId = parseInt(req.params.id);
  let requestedTodoIndex = toDoArray.findIndex( todo => {
    return todo.id === requestedTodoId
  });
  toDoArray.splice(requestedTodoIndex, 1);
  res.json(toDoArray);
})

// Update - PUT
app.put('/todos/:id', (req, res)=> {
  let requestedTodoId = parseInt(req.params.id);
  let requestedTodo = toDoArray.find(todo => {
    return todo.id === requestedTodoId;
  })

  requestedTodo.isComplete = !requestedTodo.isComplete;
  res.json(requestedTodo);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App on port ${port}`));