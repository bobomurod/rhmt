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
console.log(req.body)
    var fromBalance = Holder.findOne({wallet: req.body.from}, function (err, fromHolder) {
        if (err) throw err;
        console.log("holder.balance is " + fromHolder.balance);
        if (fromHolder.balance >= req.body.value) {
    
            fromBalance = fromHolder.balance - req.body.value;
    
            Holder.findOneAndUpdate({wallet: req.body.from}, {$set: {balance: fromBalance}}, function (err, holder) {
                if (err) throw err;
            });
            
             Holder.findOne({wallet: req.body.to}, function(err, holder){
                            if (err) throw err;
                            _toBalance = holder.balance + req.body.value;
                    
                            Holder.findOneAndUpdate({wallet: req.body.to}, {$set: {balance: _toBalance}}, function(err, holder) {
                                if (err) throw err;
                            });
                            //return holder.balance;
                });
    
    
            res.send("Transfered");
        } else {
            res.send(  "Somethin wrong");
        }
    });

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