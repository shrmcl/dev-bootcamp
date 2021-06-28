const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('form.ejs')
});

app.post('/results', (req, res) => {
    console.log(req);
    res.render('results.ejs')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App listening on port ${port}`));