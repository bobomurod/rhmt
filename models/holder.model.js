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
    kycid: {type: String, required: true},                  //KYC id это мид ака сказал что в будущем номера телефоно могут относится к одному айди(несколько счетов у одного пользователя)
    mbsid: {type: Number, required: true, unique: true},
    last_mint_timestamp: {type: Number},
    reg_date: {type: String},
    reg_timestamp: {type: Number},
    isVerified: {type: Boolean},
    status: {type: String},
    banned: {type: Boolean}
})

//Export the model

module.exports = mongoose.model('Holder', HolderShema)
