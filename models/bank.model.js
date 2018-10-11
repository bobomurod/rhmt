const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BankSchema = new Schema({
    marketcap: {type: Number, required: true, max: 100},    //100 - это максимум эмиссии что сейчас возможно
    finalcap: {type: Number, required: true, }
})

module.exports = mongoose.model('Bank', BankSchema)
