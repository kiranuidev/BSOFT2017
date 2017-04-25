//get the reference of express module.
//express moudle internallly exports a function
var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
module.exports = function() {
    //execute the express function referenced in line 1.
    var app = express();

    //using body parser
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json 
    app.use(bodyParser.json());

    app.set('view engine', 'ejs');
    app.use(require('express-session')({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    require("./passport-local.js")();
    var routes = require("../app/routes");
    routes(app);
    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/products/1');
        });
    return app;
}