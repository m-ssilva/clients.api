const mongoose = require('mongoose');
const mongoDB = require('../config/database');

mongoose.connect(mongoDB.connString, mongoDB.configs);

const Schema = mongoose.Schema;

/**
 * @swagger
 * definitions:
 *   Product:
 *     type: object
 *     required:
 *       - name
 *       - price
 *     properties:
 *       name:
 *         type: string
 *       price:
 *         type: number
 *     items:
 *       $ref '#definitions/Product'
 */

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;