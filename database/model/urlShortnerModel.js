const mongoose = require('mongoose');
const shortid = require('shortid');


const urlSchema = new mongoose.Schema({
    Url: String,
    displayUrl: String,
    hash: String,
    newUrl : String,
    createdOn : {type: String},
    visited : {type: Number , default : 0}
});

const ShortUrlModel = mongoose.model('ShortUrlModel' , urlSchema);

module.exports = ShortUrlModel;