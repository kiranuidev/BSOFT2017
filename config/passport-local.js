var passport = require("passport");
var Strategy = require("passport-local").Strategy;
var users = require('mongoose').model("profile")
module.exports = function() {
    passport.use(new Strategy(
        function(username, password, cb) {
            users.findOne({ username: username }, function(err, user) {
                if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                if (user.password != password) {
                    return cb(null, false);
                }
                return cb(null, user);
            });
        }));

    passport.serializeUser(function(user, cb) {
        cb(null, user._id);
    });

    passport.deserializeUser(function(id, cb) {
        users.findById(id, function(err, user) {
            if (err) { return cb(err); }
            cb(null, user);
        });
    });
}