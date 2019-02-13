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

exports.getLevelByMSISDN = function(req, res, next) {
    Holder.findOne({wallet: req.body.wallet}, function(err, result){
        if (err) {
            res.send(err);
            return next(err);
            } else if (result != null){
                res.send({
                    "wallet": result.wallet,
                    "level_count": result.level
                })
            } else {
        res.send({
            "error" : "404",
            "message": "MSISDN not found",
        })
        }
    })
    
}

exports.getLevelByMBSID = function(req, res) {
    Holder.findOne({mbsid: req.body.mbsid}, function(err, result){
        if (err) {
            res.send(err);
            return next(err);
            } else if (result != null){
                res.send({
                    "mbsid": result.mbsid,
                    "level_count": result.level
                })
            } else {
        res.send({
            "code" : "404",
            "message": "MBSID not found",
        })
        }
    })
    
}

exports.getLevelByMsisdn = function(req, res) {
    Holder.findOne({wallet: req.params.wallet}, function(err, result){
        if (err) {
            res.send(err);
            return next(err);
            } else if (result != null){
                res.send({
                    "wallet": req.body.wallet,
                    "level_count": result.level
                }) 
            } else {
            res.send({
                "error" : "404",
                "message": "MSISDN not found",
            })
        } 
        
    })
    
}

exports.getLevelByMbsID = function(req, res) {
    Holder.findOne({mbsid: req.params.mbsid}, function(err, result){
        if (err) {
            res.send(err);
            return next(err);
            } else if (result != null){
                res.send({
                    "wallet": req.body.wallet,
                    "level_count": result.level
                }) 
            } else {
            res.send({
                "error" : "404",
                "message": "mbsID not found",
            })
        } 
        
    })
    
}


exports.levelUp = function(req, res) {
    Holder.findOne({wallet: req.body.wallet}, function(err, result){
        if (err) res.send(err);
        if (result.balance >= 10000) 
            {
                Holder.findOneAndUpdate({
                            wallet: req.body.wallet
                            }, 
                            {
                                $set: {
                                        balance: result.balance - 10000, 
                                        used: result.used + 10000, 
                                        
                                    },
                                    $inc: {level: 1}
                                }, 
                                function(err, result) {
                                    if (err) res.send(err);
                                    res.send("wallet balance is equal or more than 10000 and now converted to level-1. Congrats!");
                                    })
            } 
            else {
                res.send("Wallet balance is less than 10000, claim " +  (10000-result.balance) +  " and try again. Good luck!" )
            }
    })
}