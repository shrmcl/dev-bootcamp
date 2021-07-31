// Require express and initialize it
const express = require('express')
const app = express()
// Declare a port variable
const port = process.env.PORT || 3000
// Require socket.io and pass the server object to it
const io = require('socket.io')(
  app.listen(port, () => {console.log(`app running on ${port}`)
  }))
// Tell our app to use our client folder as static code
app.use(express.static('client'))
// Set up a home route and send the client folder

// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on('connection', (socket) => {
  console.log('a new user joined')
  // listen to the new user joinging the chat
  socket.on('New User', (nick) => {
    console.log('new user added: ', nick)
    io.emit('New User', nick)
  })
})