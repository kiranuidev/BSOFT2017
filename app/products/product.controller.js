let productCtrl = {};
let productModel = require('mongoose').model("products");

productCtrl.get = function(req, res) {
    console.log(req.params);
    var index = req.params.id ? req.params.id : 1;
    var query = req.params.query ? req.params.query : "";
    productModel.find({}, {}, { limit: 10, skip: 10 * index })
        .then(function(response) {
            //console.log(response);
            res.render("products", { products: response });
        }).catch(function(err) {
            res.render("products");
        })

};

productCtrl.search = function(req, res) {
    console.log(req.body);

    productModel.find({ Model: new RegExp('/^' + req.body.search + '.*$', "i") })
        .then(function(response) {
            //console.log(response);
            res.render("products", { products: response });
        }).catch(function(err) {
            res.render("products");
        })

};


module.exports = productCtrl;