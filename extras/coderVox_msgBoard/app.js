const express = require("express");
const app = express();
// connect our routes we created in the posts.js file
const postRoutes = require("./routes/posts");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));
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
