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
  let todos_query = `SELECT * FROM hr.todos`
  conn.query(todos_query)
  .then(function(todos){
    console.log(todos.rows)
    res.json(todos.rows)
  })
  .catch(
    function(err) {
      console.log('we epically failed in our get route' + err)
    }
  )
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
