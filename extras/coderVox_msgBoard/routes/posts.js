const express = require("express");
// Router is a built-in Express method to handle routes
const router = express.Router();
// route is actually "/posts" here, which we redirected root route to
router.get("/", (req, res) => {
    const posts = [{
        topic: "i like bananas",
        message: "does anyone have a recipe",
        name: "Linda"
    }];
    res.render("index", {posts: posts});
})


// allow app.js to use these routes
module.exports = router;