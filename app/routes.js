var registerCtrl = require('./register/register.controller');
module.exports = function(app) {

    app.get("/", function(req, res) {
        var page = {
            left: {
                title: "Nodejs"
            },
            right: {
                title: "ExpressJs"
            }
        };
        res.render("index", page);
    });
    app.route("/register").get(registerCtrl.get);
    app.route("/register").post(registerCtrl.post);
}