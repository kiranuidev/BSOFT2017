var mongoose = require("mongoose");
var config = require("./configuration");
module.exports = function() {
    mongoose.connect(config.dbConnection)
        .then(function(resposne) {
            console.log("db connected");
        })
        .catch(function(res) {
            console.log("Error in connecting to db");
        });
    require("../app/register/register.model");
    require("../app/products/product.model");
}