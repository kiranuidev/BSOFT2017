//get the reference of express module.
//express moudle internallly exports a function
var express = require("express");
var bodyParser = require("body-parser");
module.exports = function() {
    //execute the express function referenced in line 1.
    var app = express();

    //using body parser
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json 
    app.use(bodyParser.json());

    app.set('view engine', 'ejs');
    var routes = require("../app/routes");
    routes(app);
    return app;
}