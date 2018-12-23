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
})

//Export the model

module.exports = mongoose.model('Holder', HolderShema)