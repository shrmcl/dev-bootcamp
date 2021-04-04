const express = require('express');
const app = express();

const chalk = require('chalk');

const logger = require('morgan');
// set up your logger
app.use(logger('dev'));
// BUILD the following route handlers
// use POSTMAN to test - NO BROWSERS allowed - backend hats only

// 1. build a root route that returns 'I am the root route.'
app.get('/', (req, res)=>{
    res.send('I am the root route')
})
// 2. build a route for /animals that returns 'I love animals.'

// BUILD the following route handlers
// use CURL to test - NO BROWSERS allowed - backend hats only

// 3. build a route for /animals/cats that returns 'I love cats.'

// 4. build a route for /desserts that returns 'I love desserts.'

// BUILD the following route handler
// use CURL or POSTMAN to test - NO BROWSERS allowed - backend hats only

// 5. build a route that handles ALL other routes that returns 'Page not found yet.'

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(chalk.green(`Listening on port ${chalk.cyanBright(port)}`)));