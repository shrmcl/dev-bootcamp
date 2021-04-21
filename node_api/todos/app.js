const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const {toDoArray} = require('./fakeData')

app.get('/', (req, res) => {
    res.send('am root route')
})

// Read - GET
app.get('/todos', (req, res) => {
    res.json(toDoArray);
})

// Create - POST
app.post('/todos', (req, res) => {

    let newTodo = {
        id: 4,
        description: "buy more stuff",
        isComplete: false
    }

    toDoArray.push(newTodo);
    res.json(newTodo);
})

// Delete - DELETE
app.delete('/todos/:id', (req, res) => {
    let requestedToDoId = parseInt(req.params.id);
    let requestedToDoIndex = toDoArray.findIndex( todo => {
        return todo.id === requestedToDoId
    })
    console.log(requestedToDoIndex);
    toDoArray.splice(requestedToDoIndex, 1);
    res.json(toDoArray);


    
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`))