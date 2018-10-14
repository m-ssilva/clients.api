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
    name: { type: String, required: true },
    document: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    products: { type: [Product.schema] },
    type: { type: Number, required: true },
})

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;