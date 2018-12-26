const Holder = require("../models/holder.model")

exports.test = function(req, res){
    console.log("Levels testing")
    res.send("Levels API testing")
};

exports.test_object = function(req, res) {
    let testobj = Holder.findOne({wallet: req.body.wallet}, function(err, result){
        if (err) res.send(err);
        //console.log(result.balance)
        return result.balance;
    });
    //console.log(testobj)
}

exports.getLevel = function(req, res) {
    Holder.findOne({wallet: req.body.wallet}, function(err, result){
        if (err) res.send(err);
        res.send({
            "wallet": req.body.wallet,
            "level_count": result.level
        })
    })
    
}

exports.levelUp = function(req, res) {
    Holder.findOne({wallet: req.body.wallet}, function(err, result){
        if (err) res.send(err);
        if (result.balance >= 10000) 
            {
                Holder.findOneAndUpdate({wallet: req.body.wallet}, {$set: {balance: result.balance - 10000, used: result.used + 10000, level: 1}}, function(err, result) {
                    if (err) res.send(err);
                    res.send("wallet balance is equal or more than 10000 and now converted to level-1. Congrats!");
                })
            } 
            else {
                res.send("Wallet balance is less than 10000, claim " +   (10000-result.balance) +  " and try again. Good luck!" )
            }
    })
}