const Holder = require('../models/holder.model');
const Bank = require('../models/bank.model');

exports.test = function (req, res) {
    res.send('Transaction test');
}

exports.send = function (req, res) {
    res.send('Sending in progress..');
}

exports.create = function (req, res) {
    Bank.updateOne({marketcap: req.body.marketcap}, function (err, result) {
        if (err) res.send(err);
        res.send('Actual market cap is ' + Bank.marketcap)
    })
}

exports.setcap = function (req, res) {
    let bank = new Bank(
        {
            marketcap: req.body.marketcap
        }
    )
    bank.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.send('Marketcap setted to ' + req.body.marketcap)
    })
}