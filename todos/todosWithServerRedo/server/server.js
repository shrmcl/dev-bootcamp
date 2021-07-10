const express = require('express');
// requiring cors to server React Todos app
const cors = require('cors');
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
app.use(cors());

// import our data from fakeData.js
const {toDoArray} = require('./fakeData')

// tell server to use 'client' folder
app.use(express.static('../client'));
// NOTE: Do not need if using above line of code
// app.get('/', (req, res)=>{
//   res.send('Root route.')
// })

// READ - GET - send the toDoArray to client as JSON
app.get('/todos', (req, res) => {
    // res.json(toDoArray);
    res.status(264).json(toDoArray);
})

// used temp to create new id
let newId = 4;

// CREATE - POST - user adds a new todo item
app.post('/todos', (req, res) => {
    let newTodo = {
        id: newId++,
        description: req.body.description,
        isComplete: false
    }
    // add new todo item to our toDoArray & send client the new todo item
    toDoArray.push(newTodo);
    res.status(201).json(newTodo);
})

// UPDATE - PUT - change state of task value for "isComplete" between true and false
app.put('/todos/:id', (req, res) => {
    let requestedTodoId = parseInt(req.params.id);
    // find the matching todo item in the array to update
    let requestedTodo = toDoArray.find(todo => {
        return todo.id === requestedTodoId;
    })
    // update the value of 'isComplete' (toggle between true and false)
    requestedTodo.isComplete = !requestedTodo.isComplete;
    // send the updated todo item to client
    res.json(requestedTodo);
})

// DELETE - DELETE - add id parameter to specify which todo item is being deleted
app.delete('/todos/:id', (req, res) => {
    // create variable for the requested item's id, parsed to be number data type
    let requestedTodoId = parseInt(req.params.id);
    // findIndex() to iterate thru toDoArray to find index of matching id
    let requestedTodoIndex = toDoArray.findIndex( todo => {
        // return index of matching id in the array
        return todo.id === requestedTodoId;
    })
    // remove the item with matching id from toDoArray. (index start, quantity to remove)
    // will return "-1" if no matching item, thus removing LAST item in array (-1)
    toDoArray.splice(requestedTodoIndex, 1);
    // send new toDoArray to browser
    res.json(toDoArray);
})

const port = process.env.PORT || 3001;

// for testing via 'testGetTodos.js' only
module.exports = app;

app.listen(port, ()=> console.log(`listening on port ${port}.`))