const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
// dev and production keys
const keys = require('./config/keys')
app.set('view engine', 'ejs');
// connect to database
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("Connected to database"))
.catch((error) => console.log(error));
app.use(express.urlencoded({extended: true}));
// mongo schema
let User = require("./models/user");
// passport configuration
app.use(require('express-session')({
    secret: "blah blah blah", // used to calc the hash to protect our pw
    resave: false,
    saveUninitialized: false
}));
// more passport configuration
app.use(passport.initialize()); // starts the user's session
app.use(passport.session()); // allows access to session
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser()); // stores User object in session
passport.deserializeUser(User.deserializeUser()); // removes User object in session

app.get('/', (req, res) => {
    res.render('home');
});

// adding our middleware function we created further down
app.get('/newsfeed', isLoggedIn, (req, res) => {
    res.render('newsfeed');
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// grab from signup form
app.post("/signup", (req, res) => {
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            // if error, resend signup form to user (not ideal)
            return res.render("signup.ejs")
        } else {
            // if no error, send user to the newsfeed
            passport.authenticate("local")(req, res, () => {
                res.redirect("/newsfeed");
            })
        }
    })
})

app.get("/login", (req, res) => {
    res.render("login");
});

app.post('/login', passport.authenticate('local',
    {
        // using the passport middleware, which happens before the callback function
        // callback function is left empty; the middelware handles the routes
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), function(req, res){
    })

app.get('/logout', (req, res) => {
    // passport method handles logout and we redirect logged out user to home 
    req.logout();
    res.redirect('/');
});

// create a function to use as middleware to protect our routes
// i.e. only logged-in users can view these routes
// I added this to the /newsfeed route
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        // if logged in, proceed to route
        return next();
    }
    // else redirect to login
    res.redirect('/login');
}

app.listen(3000, () => console.log('App is running on port 3000'))