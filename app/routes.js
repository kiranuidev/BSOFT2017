var registerCtrl = require('./register/register.controller');
var productCtrl = require('./products/product.controller');
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
    app.route("/login").get(registerCtrl.login);
    app.route("/register").get(registerCtrl.get);
    app.route("/register").post(registerCtrl.post);
    app.route("/products/:id").get(require('connect-ensure-login').ensureLoggedIn(), productCtrl.get);
    app.route("/products/search").post(require('connect-ensure-login').ensureLoggedIn(), productCtrl.search);
}