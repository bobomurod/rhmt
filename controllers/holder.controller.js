const Holder = require('../models/holder.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller');
};

// @TODO
//  Сделать невозможным создания двух аккаунтов с одним и тем же walletid
// Переименовать wallet на walletID
exports.holder_create = function (req, res) {
    let holder = new Holder(
        {
            wallet: req.body.wallet,
            balance: req.body.balance
        }
    )

    holder.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Holder Created successfully')
    })

};

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
 // @TODO переделать на арзивирование аккаунта
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

exports.holder_balance = function (req, res) {
    Holder.findOne({wallet: req.params.wallet},  function (err, holder) {
        if (err) throw err;
        res.send(holder)
    })
}