const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HolderShema = new Schema({
    wallet: {type: String, required: true, max: 100},
    balance: {type: Number, required: true},
})

//Export the model

module.exports = mongoose.model('Holder', HolderShema)