//get the reference of express module.
//express moudle internallly exports a function
var express = require("express");

module.exports = function() {
    //execute the express function referenced in line 1.
    var app = express();

    return app;
}