const express = require("express");
const app = express();
const mongoose = require("mongoose");
// connect our routes we created in the posts.js file
const postRoutes = require("./routes/posts");
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/message_board', {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(express.static('public'));
// parse the body (maybe deprecated or built-in to express?)
app.use(express.urlencoded({extended: true}));
// first arg adds "/posts" to start of each route
// second arg tells app to use routes in posts.js via postRoutes const above
app.use("/posts", postRoutes);


app.get("/", (req, res) => {
    // res.send('connected')
    // res.render("index");
    // redirect root route to "/posts"
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
