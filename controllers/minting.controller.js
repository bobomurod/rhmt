const Holder = require("../models/holder.model");
const Mint = require("../models/minting.model");
const uuidv4 = require("uuid/v4");

var additional;  //это поинты , просчитанные поинты хранятся вот здесь

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


//////////////////////////////////////////////////////////////////////////////////////////////


exports.minting_easy = function(req, res, next) {

switch (req.body.kind) {
  case 0:
     additional = ( ( ( req.body.value ) /100 ) *1 );
    break;
  case 2:
     additional = ( ( ( req.body.value ) /100 ) *2 );
    break;
  case 4:
     additional = ( ( ( req.body.value ) /100 ) *4 );
    break;
  case 5:
     additional = ( ( ( req.body.value ) /100 ) *5 );
    break;
  default:
    res.send("Unrecognized transaction kind")
    break;
}

Holder.findOne({ wallet: req.body.wallet }, function(err, holder) {
  if (err) {
    res.send(err);
  }
  //Holder.findOneAndUpdate({wallet: req.body.wallet}, {$inc: {balance: (((req.body.value)/100)*req.body.kind)}},
  Holder.findOneAndUpdate({wallet: req.body.wallet}, {$inc: {balance: additional }},
    function (err, holder) {
      if (err) return next(err);

      let mint = new Mint(
        {
        initator_id: "0",
          minting_id: uuidv4(),
          wallet: req.body.wallet,
          value: req.body.value,
          kind: req.body.kind,
          kycid: req.body.kycid,
          op_date: new Date(),
          op_timestamp: Date.now(),
          op_id: uuidv4(),
        }
      )
      
      mint.save(function(err, docs) {
        if (err) {
          console.error("Saving MINT model error");
          return next(err);
        } else {
          console.log("mint saved succesful")
        }
      })

    //   holder.save(function (err, docs) {
    //     if (err) {
    //         res.send("wallet creating error, maybe wallet exists or you sending wrong type of data.")
    //         return next(err);
    //     } else { 
    //     res.send('Holder Created successfully')
    //     }
     
    // })

    //   let holder = new Holder(
    //     {
    //         wallet: req.body.wallet,
    //         balance: req.body.balance,
    //         reg_date: new Date(),
    //         reg_timestamp: Date.now(),
    //         kycid: req.body.kycid,
    //         level: 0,
    //         used: 0 
    //     }
    // )

      res.send('true');
    });
  })
}


///////////////////////////////////////////////////////////////////////////////////////////////

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
