const mongoose = require('mongoose');
const mongoDB = require('../config/database');

mongoose.connect(mongoDB.connString, mongoDB.configs);

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: String,
    document: String,
    mail: String,
    phone: String,
    type: Number
})

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;