let registerCtrl = {}
registerCtrl.get = function(req, res) {
    res.render("register");
};
registerCtrl.post = function(req, res) {
    console.log(req.body);
    res.send("Thank you");
};
module.exports = registerCtrl;