const express = require ('express');
const app = express();
// const bodyParser = require('body-parser');
app.set('view engine', 'ejs')
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/success', (req, res) => {
  res.render('success')
})

app.post('/submit', (req, res) => {
  let data = {
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    phone: req.body.phone,
    country: req.body.country,
    age: req.body.age,
    filename: req.body.filename
  }
  console.log(req.body)
  res.render('submit', {data: data})
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));