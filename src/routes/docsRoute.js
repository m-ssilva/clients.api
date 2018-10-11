const express = require('express');
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const options = require('../models/docsModel');
const swaggerSpec = swaggerJSDoc(options)

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;