const express = require("express");
// Router is a built-in Express method to handle routes
const router = express.Router();
// import our mongoose schema from post.js
const Post = require("./../models/post");
// this "/" is actually "/posts" which we added in app.js via "app.use("/posts", postRoutes);"
router.get("/", (req, res) => {
    const posts = [{
        topic: "I like banana smoothies",
        message: "Does anyone have a good recipe?",
        name: "Linda"
    },
    {
        topic: "xxx",
        message: "ddd?",
        name: "eee"
    }];
    res.render("index", {posts: posts});
})
// this is really "/posts/new"
router.get("/new", (req, res) => {
    // we are autopopulating form with empty strings
    // only to handle the issue of the fact that we are also populating form in form_inputs.ejs 
    // with unsuccessful post attempts to be corrected by user 
    let post = {topic: "", message: "", name: ""}
    res.render("new", {post: post});
});

// show user a success message when post is successful
router.get("/:id", (req, res) => {
    res.send("It works!");
})

// allow app.js to use these routes
module.exports = router;