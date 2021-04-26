const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));
// import our data from fakeData.js
const {toDoArray} = require('./fakeData')
// route handler for root
app.get('/', (req, res) => {
    res.send('i am root.')
})

// READ - GET - send the toDoArray to client as JSON
app.get('/todos', (req, res) => {
    res.json(toDoArray);
})

// CREATE - POST - user adds a new todo item
app.post('/todos', (req, res) => {
    let newTodo = {
        id: 4,
        description: 'buy more stuff',
        isComplete: false
    }
    // add new todo item to our toDoArray & send client the new todo item
    toDoArray.push(newTodo);
    res.json(newTodo);
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

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}.`))