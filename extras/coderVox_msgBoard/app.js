const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    // res.send('connected')
    res.render("index");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})