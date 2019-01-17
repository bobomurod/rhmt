const Holder = require("../models/holder.model");

exports.minting_test = function(req, res) {
  res.send("Minting test");
};

exports.minting_mint = function(req, res) {
  // Holder.findOneAndUpdate({wallet: req.body.wallet}, {$set: {$balance: balance + req.body.value}},
  //     function(err, holder){
  //         if(err) {
  //             res.send(err)
  //         }
  //     })
  // res.send("true")

  Holder.findOne({ wallet: req.body.wallet }, function(err, holder) {
    if (err) {
      res.send(err);
    }
    Holder.findOneAndUpdate(
      { wallet: req.body.wallet },
      { $set: { balance: holder.balance + req.body.balance } },
      function(err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      }
    );
  });
};

exports.minting_easy = function(req, res, next) {

Holder.findOne({ wallet: req.body.wallet }, function(err, holder) {
  if (err) {
    res.send(err);
  }
  Holder.findOneAndUpdate({wallet: req.body.wallet}, {$inc: {balance: (((req.body.value)/100)*1)}},
    function (err, holder) {
      if (err) return next(err);
      res.send('true');
    });
  })
}

exports.minting_test_find = function (req, res) {
  Holder.find({wallet: req.body.wallet}, (err, result) => {
    if (err) { console.log("error")} else {
      console.log(result.balance)
      
    }
  })
}

exports.minting_fund = function(req, res) {
  Holder.findOne({ wallet: req.body.wallet }, function(err, holder) {
    if (err) {
      res.send(err);
    }
    Holder.findOneAndUpdate(
      { wallet: req.body.wallet },
      { $set: { balance: holder.balance + req.body.value } },
      function(err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      }
    );
  });
};
