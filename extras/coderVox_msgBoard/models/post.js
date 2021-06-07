const mongoose = require("mongoose");
const { post } = require("../routes/posts");
const router = require("../routes/posts");
const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

// actually this is "/posts"
router.post("/", (req, res) => {
    let thePost = new post({
        topic: req.body.topic,
        message: req.body.message,
        name: req.body.name
    });
    thePost.save((error, post) => {
        if(error) {
            console.log(error);
            // direct the user to the form they just submitte so changes can be made
            res.render("new", {post: thePost})
        } else {
            console.log(post);
            // direct user to the post they just successfully created
            // id created automatically by mongo
            res.redirect(`/posts/${post._id}`)
        }
    })
});

// export the schema to be accessed by posts.js
module.exports = mongoose.model("Post", postSchema)