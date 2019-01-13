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


exports.minting_easy = function(req, res) {
  Holder.findOne({ wallet: req.body.wallet }, function(err, holder) {
    if (err) {
      let holder = new Holder(
        {
            wallet: req.body.wallet,
            balance: req.body.balance,
            reg_date: new Date(),
            reg_timestamp: new Timestamp(),
            used: 0,
            level: 0
            
        }
      )
      res.send(err);
    }
    Holder.findOneAndUpdate(
      { wallet: req.body.wallet },
      { $set: { balance: holder.balance + (((req.body.value)/100)*1) } },
      function(err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      }
    );
  });
};


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
