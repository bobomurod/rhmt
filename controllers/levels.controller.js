const Holder = require("../models/holder.model")

exports.test = function(req, res){
    console.log("Levels testing")
    res.send("sdfvsdf")
};

exports.getLevel = function(req, res) {
    Holder.findOne({wallet: req.body.wallet}, function(err, res){
        if (err) res.send(err);
        res.send(res)
    })
    
}