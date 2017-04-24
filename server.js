var config = require("./config/configuration");
var express = require("./config/expressConfig");
var db = require("./config/dbConfiguration");
db();
var server = express();
server.listen(config.port);
console.log("Server running on port:" + config.port);