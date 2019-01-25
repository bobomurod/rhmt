const Holder = require("../models/holder.model");
const Mint = require("../models/minting.model");
const uuidv4 = require("uuid/v4");

var additional;  //это поинты , просчитанные поинты хранятся вот здесь

exports.minting_test = function(req, res) {
  res.send("Minting test");
};

exports.minting_easy = function(req, res) {
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


exports.minting_mint = function(req, res, next) {

switch (req.body.kind) {
  case 0:
     additional = ( ( ( req.body.value ) /10000 ) *1 );
    break;
  case 2:
     additional = ( ( ( req.body.value ) /10000 ) *2 );
    break;
  case 4:
     additional = ( ( ( req.body.value ) /10000 ) *4 );
    break;
  case 5:
     additional = ( ( ( req.body.value ) /10000 ) *5 );
    break;
  default:
    res.send("Unrecognized transaction kind")
    return next("Unrecognized transaction kind")
    break;
}

Holder.findOne({ wallet: req.body.wallet }, function(err, holder) {
  if (err) {
    res.send(err);
    return next(err)
  } else if( holder != null) {
        var balance_before = holder.balance;
        var kycid = holder.kycid;
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
                kycid: kycid,
                mbsid: req.body.mbsid,
                op_date: new Date(),
                op_timestamp: Date.now(),
                op_id: uuidv4(),
                minted: additional,
                balance_before: balance_before,
                balance_after: holder.balance + additional,
              }
            )
            
            mint.save(function(err, docs) {
              if (
                    req.body.mbsid == null || 
                    req.body.kycid == null || 
                    req.body.kind == null || 
                    req.body.value == null ||
                    req.body.wallet == null
              )
              {
                res.send({
                  "error": "4xx",
                  "message": "Expecting some really importtant stuff. Your request must contain WALLET, VALUE, KIND, MBSID and KYCID fields. Check this out!"
                })
              }
              if (err) {
                console.error( "\x1b[41m%s\x1b[0m" ,"Saving MINT model error");
                return next(err);
                } else {
                console.log( "\x1b[44m%s\x1b[0m" , "mint saved succesful")
                 }
            })
              console.error("\x1b[41m%s\x1b[0m" ," Expecting fields ");
              //res.send('true');

          });
    } else {
      res.send({
        "error" : "404",
        "message": "MSISDN not found",
      }) 
      //return next(err)
      
    }
  
  })
}


///////////////////////////////////////////////////////////////////////////////////////////////

exports.minting_test_find = function (req, res) {
  Holder.find({wallet: req.body.wallet}, (err, result) => {
    if (err) { console.log(  "\x1b[41m%s\x1b[0m" , "error")} else {
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
