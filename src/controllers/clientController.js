'use strict';

const clientRepository = require('../repositories/clientRepository');

/**
 * @swagger
 * /client:
 *   get:
 *     description: Retrieve the full list of clients
 *     tags:
 *       - client
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: clients
 *         schema:
 *           $ref: '#/definitions/Client'
 */

exports.get = (req, res, next) => {
    clientRepository.getAll()
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /client/{id}:
 *   get:
 *     description: Retrieve an specific client
 *     tags:
 *       - client
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Object id from MongoDB of the client to retrieve
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: client
 *         schema:
 *           $ref: '#/definitions/Client'
 */

exports.getById = (req, res, next) => {
    clientRepository.getById(req.params.id)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /client:
 *   post:
 *     description: Create a new client
 *     tags:
 *       - client
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: client
 *         description: Client object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Client'
 *     responses:
 *       200:
 *         description: new client
 *         schema:
 *           $ref: '#/definitions/Client'
 */

exports.post = (req, res, next) => {
    const p = req.body;
    clientRepository.create(p)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /client/{id}:
 *   put:
 *     description: Update one or multiples fields of client
 *     tags:
 *       - client
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Object id from MongoDB of the client to update
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/TimeStamp'
 *     responses:
 *       200:
 *         description: updated client
 *         schema:
 *           $ref: '#/definitions/Client'
 */

exports.put = (req, res, next) => {
    const p = req.body;
    clientRepository.update(req.params.id, p)
        .then((client) => {
            res.status(201).send(client);
        }).catch(err => res.status(500).send(err))
};

/**
 * @swagger
 * /client/{id}:
 *   delete:
 *     description: Delete an specific client
 *     tags:
 *       - client
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Object id from MongoDB of the client to delete
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: client
 *         schema:
 *           $ref: '#/definitions/Client'
 */

exports.delete = (req, res, next) => {
    clientRepository.delete(req.params.id)
        .then((client) => {
            res.status(200).send('Cliente Excluído');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};