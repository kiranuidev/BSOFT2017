var mongoose = require('mongoose');
var bcrypt = require("bcryptjs");
var config = require("../../config/configuration")
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6
    },
    email: { type: String },
    password: { type: String, required: true, min: 6 },
    country: { type: String }
});

userSchema.pre('save', function(next) {
    var user = this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            console.log(user.password);
            next();
        });
    });
});
var countrySchema = mongoose.Schema({
    name: { type: String },
    code: { type: String }
});

function encryptPassword(pwd) {


}
mongoose.model("countries", countrySchema);
mongoose.model("profile", userSchema);