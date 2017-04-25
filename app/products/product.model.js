var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    Model: {
        type: String,
    },
    Price: { type: Number },
    Description: { type: String },
    picture: { type: String }
});


mongoose.model("products", productSchema);