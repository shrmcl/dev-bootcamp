const express = require('express');
const app = express();

// to parse the POST form data, use this parser
// "true" instead of "false" fixed the issue of getting body: "[Object: null prototype] " returned before req.body data
app.use(express.urlencoded({ extended: true }));

app.set('')

app.get('/', (req, res) => {
  res.render('form.ejs')
});

app.post('/results', (req, res) => {
  // req.body is required with parser
    console.log(req.body);
    res.render('results.ejs')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App listening on port ${port}`));