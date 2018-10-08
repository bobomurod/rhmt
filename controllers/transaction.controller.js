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

// @TODO Сюда <function name> проверку на то существует аккаунт или нет
// Также надо написать тесты - много тестов па разным трансферам
// С проверкой переполнения буфера и минусовых балансов

exports.transfer = function (req, res) {

var fromBalance = Holder.findOne({wallet: req.body.wallet}, function (err, holder) {
        if (err) throw err;
        return holder.balance;
    });

res.send (transfer(req.body.to, req.body.from, req.body.value))

    function transfer (_to, _from, _value) {
        if (_fromBalance => _value) {
            _fromBalance = _fromBalance - _value;
            
            _toBalance = _toBalance + _value;

            return "Successfull";
        } else {
            return "Somethin wrong";
        }
    }
}


//Надо встроить
// function balanceUpdater(_from, _fromFinalBalance, _to, _toBalance)
// Holder.findOneAndUpdate({wallet: req.body.wallet}, {$set: {balance: req.body.balance}}, function(err, holder) {
//     if (err) res.send(err);
//     res.send("Balance updated");
// })


// {
//     "from": {
//         "wallet": "address1",
//         "balance": "number"
//     },
//     "to": {
//         "wallet": "address2",
//         "balance"
//     }
// }