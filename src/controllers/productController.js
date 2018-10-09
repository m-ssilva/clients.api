'use strict';

const productRepository = require('../repositories/productRepository');

exports.get = (req, res, next) => {
    productRepository.getAll()
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res, next) => {
    productRepository.getById(req.params.id)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const p = req.body;
    productRepository.create(p)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res, next) => {
    const p = req.body;
    productRepository.update(req.params.id, p)
        .then((client) => {
            res.status(201).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) => {
    productRepository.delete(req.params.id)
        .then((client) => {
            res.status(200).send('Produto Excluído');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};