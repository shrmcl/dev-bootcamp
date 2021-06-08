const express = require("express");
// Router is a built-in Express method to handle routes
const router = express.Router();
const Post = require("./../models/post");

// route is actually "/posts" here, which we redirected root route to
router.get("/", (req, res) => {
    const posts = [{
        topic: "i like bananas",
        message: "does anyone have a recipe",
        name: "Linda"
    }];
    res.render("index", {posts: posts});
});

router.get("/new", (req, res) => {
    // setting default values because the form is pulling some sort of value when 
    // the post does not successfully submit and user needs to see the attempted inputs.
    // and because of that, the form will look for these inputs always
    let post = {topic: "", message: "", name: ""}
    res.render("new", {post: post});
});

router.get("/:id", (req, res) => {
    res.send("It works!");
});

router.post("/", (req, res) => {
    let thePost = new Post({
        topic: req.body.topic,
        message: req.body.message,
        name: req.body.name
    });
    thePost.save((error, post) => {
        if(error) {
            console.log(error);
            res.render("new", {post: thePost});
        } else  {
            console.log(post);
            res.redirect(`/posts/${post._id}`);
        }
    });
});


// allow app.js to use these routes
module.exports = router;