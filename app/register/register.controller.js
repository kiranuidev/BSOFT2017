let registerCtrl = {};
let registerModel = require('mongoose').model("profile");
registerCtrl.get = function(req, res) {
    res.render("register");
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
module.exports = registerCtrl;