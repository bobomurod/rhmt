const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//@TODO Implement second version of storing transaction data on DB

let TxSchema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    value: {type: Number, required: true},
    date: {type: Date, required: true},
    timestamp: {type: Number, required: true}
})

module.exports = mongoose.model('Tx', TxSchema)