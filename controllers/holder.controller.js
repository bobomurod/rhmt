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
    
        holder.save(function (err, docs) {

            if (       
                    req.body.mbsid == null || 
                    req.body.kycid == null || 
                    req.body.wallet == null || 
                    req.body.balance == null 
                ) {
                    res.send({
                        "error": "4xx",
                        "message": "Expecting some of required must-have fields"
                    })
                }
            if (err) {
                res.send("wallet creating error, maybe wallet exists or you sending wrong type of data.")
                return next(err);
            } else { 
            res.send('Holder Created successfully')
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
            res.send("some error")
            next(err)} else {
                if (holder == null) {
                    res.send("maybe holder does not exist")
                } else {
                    res.send("{"+holder.balance+"}")
                }
            }
    })
}