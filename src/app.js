const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

const index = require('./routes/index');
const clientRoute = require('./routes/clientRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.use('/', index);
app.use('/client', clientRoute);

module.exports = app;