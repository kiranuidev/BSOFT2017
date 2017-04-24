var config = require("./config/configuration");
var http = require('http');
var server = http.createServer((req, res) => {
    // if (req.url == "/login") {
    //     res.end("<h1><input type='text' name='login'></h1>");
    // } else {
    //     res.end("<h1>Welcome to nodejs</h1>");
    // }
    for (let i = 0; i < 9999999; i++) {

    }
    res.end("<h1>Welcome to nodejs</h1>");
});

server.listen(config.port);
console.log("Server running on port:" + config.port);