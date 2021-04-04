const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send(' I am the root route');
});

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`App listening on port ${port}`));