const mongoose = require('mongoose');
const mongoDB = require('../config/database');
const Schema = mongoose.Schema;
const Product = require('./productModel');

mongoose.connect(mongoDB.connString, mongoDB.configs);

/**
 * @swagger
 * definitions:
 *   Client:
 *     type: object
 *     required:
 *       - name
 *       - document
 *       - mail
 *       - phone
 *       - mail
 *       - products
 *       - type
 *     properties:
 *       name:
 *         type: string
 *       document:
 *         type: string
 *       mail:
 *         type: string
 *       phone:
 *         type: string
 *       products:
 *         type: array
 *         items:
 *             $ref: '#/definitions/Product'
 *       type:
 *         type: number
 *     Clients:
 *         type: array
 *         items:
 *             $ref '#definitions/Client'
 */

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