const mongoose = require('mongoose');
const mongoDB = require('../config/database');
const Schema = mongoose.Schema;
const Product = require('./productModel');

mongoose.connect(mongoDB.connString, mongoDB.configs);

const clientSchema = new Schema({
    name: String,
    document: String,
    mail: String,
    phone: String,
    products: [Product.schema],
    type: Number
})

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;