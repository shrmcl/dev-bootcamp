// ---------------------------------------------------------
// Select all HTML elements we will need for the project:  |
// ---------------------------------------------------------

// ------------- Nickname Elements We Need ------------------------------
// 1. Create a variable called "nickname" and select the div with the class
//	  "nickname"

// 2. Create a variable called "nicknameSubmit" and select the button with 
//	  the class "nickname__submit"


// 3. Create a variable called "nicknameInput" and select the input with the 
// 	  ID "nickname"


// -------------- Chat Elements We Need ---------------------------------
// 1. Create a variable called "message" and select the input with the ID
//	  "message"

// 2. Create a variable called "chatMessages" and select the div with the 
//	  class "chat__messages"

// 3. Create a variable called "sendNewMessage" and select the button with 
//    the class "chat__submit"



// Create new io instance:

// ---------------------------------------------------------
//      Set a new nickname in the session storage object   |
// ---------------------------------------------------------

// If no nickname is set then display the nickname modal that covers the screen




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
