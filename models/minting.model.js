const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// var appMinting = function(address, quantity) {
//   return true;
// };
// module.exports = appMinting;


let MintingSchema = new Schema({
  initator_id: {type: String, required: false},
  minting_id: {type: String, required: true},
  wallet: {type: Number, required: true},
  value: {type: Number, required: true},
  kind: {type: Number, required: true},
  kycid: {type: String, required: false},
  mbsid: {type: Number, required: true},
  op_date: {type: Date, required: true},
  op_timestamp: {type: Number, required: true},
  op_id: {type: String, unique: true, required: true},
  minted: {type: Number, required: true},
  balance_before: {type: Number, required: true},
  balance_after: {type: Number, required: true},
})

module.exports = mongoose.model('Mint', MintingSchema)