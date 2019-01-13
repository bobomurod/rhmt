const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//@TODO
// Implement second version of HolderSchema with
// wallet_address and wallet_id separately
// has last transaction id
// has registered datetime
// has previus balance
let HolderShema = new Schema({
    wallet: {type: String, unique: true, required: true, max: 100},
    balance: {type: Number, required: true},
    level: {type: Number},
    used: {type: Number},
    kycid: {type: String},
    last_mint_timestamp: {type: Number},
    reg_date: {type: String},
    reg_timestamp: {type: Number}
})

//Export the model

module.exports = mongoose.model('Holder', HolderShema)