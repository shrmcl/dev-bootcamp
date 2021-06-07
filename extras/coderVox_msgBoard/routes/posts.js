const express = require("express");
// Router is a built-in Express method to handle routes
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
})


// allow app.js to use these routes
module.exports = router;