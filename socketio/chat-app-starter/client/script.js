// ---------------------------------------------------------
// Select all HTML elements we will need for the project:  |
// ---------------------------------------------------------

const nickname = document.querySelector('.nickname')
const nicknameSubmit = document.querySelector('.nickname__submit')
const nicknameInput = document.querySelector('#nickname')
const message = document.querySelector('#messageInput')
const chatMessage = document.querySelector('.chat__messages')
const chatSubmit = document.querySelector('.chat__submit')

// Create new io instance:
// connect the browser to backend socket functionality
const socket = io()
// ---------------------------------------------------------
//      Set a new nickname in the session storage object   |
// ---------------------------------------------------------

// If no nickname is set then display the nickname modal that covers the screen
if (!sessionStorage.getItem('nickname')) {
  // display the nickname screen
  nickname.style.display = 'initial'
  // giving the submit button some functionality
  nicknameSubmit.addEventListener('click', () => {
    // set the nickname that user selected in session storage
    sessionStorage.setItem('nickname', nicknameInput.value)
    // hide the whole nickname div
    nickname.style.display = 'none'
    // inform the server that a new user has been created
    socket.emit('New User', sessionStorage.getItem('nickname'))
  })
}

socket.on('New User', (nick) => {
  console.log('new user joined: ', nick)
})

// ------------------------------------
// Functions to create new messages:  |
// ------------------------------------

// Create a new user joined message


// Create a new message from a user





// ------------------------------------
//          Socket Events             |
// ------------------------------------

// When the user clicks to send a new message emit that message and their nickname



// When the socket receives a new message


// When the socket receives a new user


// Optimizations
// 1. Load all previous messages and users who joined
// 2. Add error handling so that users cannot enter empty nicknames or messages
// 3. Make it so that a user can press enter to send the message
// 4. Show when users disconnect from the chat
// 5. Allow users to pick their own color
// 6. InnerHTML is not a good way to insert new HTML. Try to find the appropriate way to do this
