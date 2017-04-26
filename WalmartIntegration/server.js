//npm install --save express request body-parser ejs 
//creating a server.
var WalmartUrl = "http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json";
var app = require("express")();
var request = require("request");
var bodyParser = require("body-parser");


//Set up view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

//create a route 
app.get("/", function(req, res) {
    var options = {
        uri: WalmartUrl + "&query=ipad",
        method: "GET",
        contentType: "application/json"
    };
    request(options, function(err, response, body) {
        // console.log(body);
        let result = JSON.parse(body);
        res.render("index", { data: result });
    });
});
app.post("/search", function(req, res) {
    let searchQuery = req.body;


    var options = {
        uri: WalmartUrl + "&query=" + searchQuery.search,
        method: "GET",
        contentType: "application/json"
    };
    request(options, function(err, response, body) {
        // console.log(body);
        let result = JSON.parse(body);
        res.render("index", { data: result });
    });

});



app.listen(4000);