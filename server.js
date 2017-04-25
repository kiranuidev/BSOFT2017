var config = require("./config/configuration");
var express = require("./config/expressConfig");
var db = require("./config/dbConfiguration");

db();
var server = express();
var http = require('http').Server(server);
var io = require('socket.io')(http);


server.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
require("./app/chat/chat.server")(io);
server.listen(config.port);


console.log("Server running on port:" + config.port);