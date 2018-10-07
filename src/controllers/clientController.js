'use strict';

const clientRepository = require('../repositories/clientRepository');

exports.get = (req, res, next) => {
    clientRepository.getAll()
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res, next) => {
    clientRepository.getById(req.params.id)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const p = req.body;
    clientRepository.create(p)
        .then((client) => {
            res.status(200).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res, next) => {
    const p = req.body;
    clientRepository.update(req.params.id, p)
        .then((client) => {
            res.status(201).send(client);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) => {
    clientRepository.delete(req.params.id)
        .then((client) => {
            res.status(200).send('Cliente Excluído');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};