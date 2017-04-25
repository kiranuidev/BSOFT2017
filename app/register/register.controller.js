let registerCtrl = {};
let registerModel = require('mongoose').model("profile");
let countryModel = require('mongoose').model("countries");
registerCtrl.get = function(req, res) {
    countryModel.find({}, { name: 1, code: 1, _id: 0 })
        .then(function(response) {
            console.log(response);
            res.render("register", { countries: response });
        }).catch(function(err) {
            res.render("register");
        })

};
registerCtrl.post = function(req, res) {
    let user = new registerModel(req.body);
    user.save()
        .then(function(data) {
            console.log(data);
            res.send("Thank you");
        })
        .catch(function(err) {
            console.log(err);
        })

};

registerCtrl.login = function(req, res) {
    res.render("login");
}
module.exports = registerCtrl;