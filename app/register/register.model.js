var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6
    },
    email: { type: String },
    password: { type: String, required: true, min: 6 }
});

mongoose.model("profile", userSchema);