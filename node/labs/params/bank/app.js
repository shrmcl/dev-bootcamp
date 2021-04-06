const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get('/', (req, res)=> {
    res.send('I am root route for bank app.');
})

app.get('/account', (req, res)=> {
    res.send('I am the account route.')
  })
  
app.get('/account/:name', (req, res)=> {
    res.send(`This account belongs to ${req.params.name}.`)
  })
  
app.get('/account/:name/:num', (req, res)=> {
    res.send(`This account belongs to ${req.params.name} 
        and has $${req.params.num}.`)
  })

app.get('/account/:name/:amount/:num', (req, res)=>{
    let {name, amount, num} = req.params;
    let msg = '';
    if (amount > 100) {
        msg = `${name}, can I borrow $${amount / 2}?`
    } else {
        msg = `${name}, do you like living on the edge?`
    }
    res.send(msg);
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`))