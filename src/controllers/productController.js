'use strict';

const productRepository = require('../repositories/productRepository');

/**
 * @swagger
 * /product:
 *   get:
 *     description: Retrieve the full list of products
 *     tags:
 *       - product
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: products
 *         schema:
 *           $ref: '#/definitions/Product'
 */

exports.get = (req, res, next) => {
    productRepository.getAll()
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     description: Retrieve an specific product
 *     tags:
 *       - product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Object id from MongoDB of the product to retrieve
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: product
 *         schema:
 *           $ref: '#/definitions/Product'
 */

exports.getById = (req, res, next) => {
    productRepository.getById(req.params.id)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /product:
 *   post:
 *     description: Create a new product
 *     tags:
 *       - product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product
 *         description: Product object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: new product
 *         schema:
 *           $ref: '#/definitions/Product'
 */

exports.post = (req, res, next) => {
    const p = req.body;
    productRepository.create(p)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     description: Update one or multiples fields of product
 *     tags:
 *       - product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Object id from MongoDB of the product to update
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/TimeStamp'
 *     responses:
 *       200:
 *         description: updated product
 *         schema:
 *           $ref: '#/definitions/Product'
 */

exports.put = (req, res, next) => {
    const p = req.body;
    productRepository.update(req.params.id, p)
        .then((client) => {
            res.status(201).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     description: Delete an specific product
 *     tags:
 *       - product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Object id from MongoDB of the product to delete
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: product
 *         schema:
 *           $ref: '#/definitions/Product'
 */

exports.delete = (req, res, next) => {
    productRepository.delete(req.params.id)
        .then((client) => {
            res.status(200).send('Produto Excluído');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};