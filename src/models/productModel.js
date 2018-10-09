const mongoose = require('mongoose');
const mongoDB = require('../config/database');

mongoose.connect(mongoDB.connString, mongoDB.configs);

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;