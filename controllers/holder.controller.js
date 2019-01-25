const Holder = require('../models/holder.model');
const pushit = require('./pusher.controller');

exports.test = function (req, res) {
    res.send({
        text: "Greatings from test"
    });
};

exports.pushertest = function (req, res) {
    pushit("message", {
        message1: "message1",
        message2: "message2"
    })
}

// @TODO
//  Сделать невозможным создания двух аккаунтов с одним и тем же walletid
// Переименовать wallet на walletID
exports.holder_create = function (req, res, next) {


    let holder = new Holder(
            {
                wallet: req.body.wallet,
                balance: req.body.balance,
                reg_date: new Date(),
                reg_timestamp: Date.now(),
                kycid: req.body.kycid,
                mbsid: req.body.mbsid,
                level: 0,
                used: 0 
            }
        )
    Holder.find({wallet: req.body.wallet}, function(err, docs){
        if(docs.length){
            console.log("\x1b[41m%s\x1b[0m" , "Wallet exists  -> ", req.ip);
            res.send({
                "code": "4xx",
                "message": "Wallet already exists"
            })
        } else {
            holder.save(function (err, docs) {

                if (       
                        req.body.mbsid == null || 
                        req.body.kycid == null || 
                        req.body.wallet == null || 
                        req.body.balance == null 
                    )
                    {
                        console.error( "\x1b[41m%s\x1b[0m" , "Expecting fields  ->  " , req.ip );
                        res.send({
                            "code": "4xx",
                            "message": "Expecting some really important stuff. Your request must cointain WALLET, BALANCE, KYCID and MBSID fields. Please, check this out!"
                        });
                        return next(err);
                    }
                if (err) {
                    console.error( "\x1b[41m%s\x1b[0m" , "Wallet exist or wrong data type.  -> ", req.ip )
                    res.send({
                        "code": "40x",
                        "message": "wallet creating error, maybe wallet exists or you sending wrong type of data."
                    })
                    return next(err);
                } else { 
                console.log( "\x1b[44m%s\x1b[0m" , "Holder Created succesfully by  -> " , req.ip );
                //console.log(req.ip)
                res.send({
                    "code": "200",
                    "message": "Holder Created successfully"
                })
                }
             
            })
        }
    })
       
    }

// Детализация 
exports.holder_details = function (req, res) {
    Holder.findOne({wallet: req.params.wallet}, function(err, holder) {
        if (err) throw err;
        res.send(holder);
    })
};

exports.holder_update = function (req, res) {
    Holder.findOneAndUpdate({wallet: req.params.wallet}, {$set: {balance: req.body.balance}},
        function (err, holder) {
            if (err) return next(err);
            res.send('holder updated.');
        });
};
 // @TODO переделать на архивирование аккаунта
exports.holder_delete = function (req, res) {
    Holder.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully');
    });
};

exports.holder_all = function (req, res) {
    Holder.find({}, function(err, holders) {
        if (err) throw err;
        res.send(holders);
    })
}

exports.holder_balance = function (req, res, next) {
    Holder.findOne({wallet: req.params.wallet},  function (err, holder) {
        if (err) {
            res.send("Shitty error happend, but it`s Ok!")
            next(err)} else {
                if (holder == null) {
                    res.send({
                        "code": "404",
                        "message": "Maybe holder does not exists"
                    })
                } else {
                    res.send("{"+holder.balance+"}")
                }
            }
    })
}