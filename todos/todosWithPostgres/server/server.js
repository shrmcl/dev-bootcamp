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

// client function that we got from the pg library
const {Client} = require('pg');

// tells us how to connect to our postgres
const connectionObject = {
  host: 'pgdb.accsoftwarebootcamp.com',
  port: 5432,
  database: 'acc',
  user: 'acc',
  password: 'accrocks'
}

// creates a connection 
const conn = new Client(connectionObject)

// connects
conn.connect()
    .then(
      function(){
        console.log('connected to the postgres database ' + connectionObject.database)
      }
    )
    .catch(
      function(err){
        console.log('we epically failed to connect to pgdb' + err)
      }
    )

// Read - GET
app.get("/todos", (req, res) => {
  let todos_query = `
    SELECT
      todos_id,
      todo_id AS _id,
      description,
      is_complete
    FROM hr.todos`
  // make a req to the pg db
  // returns a promise
  conn.query(todos_query)
  // if the promised action is successful
  // then run the anon function inside
  .then(function(todos){
    console.log(todos.rows)
    res.json(todos.rows)
  })
  // if the promised action was a failure
  // then run the anon function below
  .catch(
    function(err) {
      console.log('we epically failed in our get route' + err)
    }
  )
});

// Create - POST
app.post('todos', (req, res) => {
  let newTodoDescription = req.body.description
  // is description even there?
  if(!newTodoDescription){    // "", null, undefined, false, 0
    res.status(404).json({message: 'I need a valid todo', code: 12404})   // sends '404' as response header
  } else {
    // create an INSERT query
    let queryStr = `
    INSERT INTO hr.todos
    (description, is_complete, user_id)
    VALUES('${newTodoDescription}', false, 2)
    RETURNING *
    `
    conn.query(queryStr)
    .then(function(todos){
      res.status(201).json(todos.rows[0]) // send todo id to client
    })
    .catch(function(err){
      console.log('An error occurred in INSERT query', err)
      res.status(404).json({message: 'The database sent an err', code: 12405})    
    })
  }
})



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
