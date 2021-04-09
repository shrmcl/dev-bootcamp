const express = require('express');
const app = express();

app.set('view engine', 'ejs');

var messages = [
    {name: "Jim", message: "I'm a cartoonist."},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter."}
 ]

 app.get('/', (req, res) => {
     res.render('messages', {data: messages})
 })

 const port = process.env.PORT || 3000;
 app.listen(port, ()=> {console.log(`listening on ${port}`)})