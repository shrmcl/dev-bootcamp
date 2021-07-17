const express = require("express");
const app = express();
const mongoose = require("mongoose");
// connect our routes we created in the posts.js file
const postRoutes = require("./routes/posts");
const port = process.env.PORT || 3000;
// to use PUT request with HTML form (override the GET/POST-only nature of HTML forms)
const methodOverride = require("method-override");

// copying from todo app (as well as my config folder)
// REQUIRE KEYS
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log('Connected to database'))
.catch(error => console.log("Cannot connect to DB"));

app.set("view engine", "ejs");
app.use(express.static('public'));
// parse the body (maybe deprecated or built-in to express?)
app.use(express.urlencoded({extended: true}));
// first arg adds "/posts" to start of each route
// second arg tells app to use routes in posts.js via postRoutes const above
app.use("/posts", postRoutes);
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
    // res.send('connected')
    // res.render("index");
    // redirect root route to "/posts"
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
