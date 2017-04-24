var config = require("./config/configuration");
var express = require("./config/expressConfig");
var server = express();
server.listen(config.port);
console.log("Server running on port:" + config.port);