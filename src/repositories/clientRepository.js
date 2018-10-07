'use strict'
const mongoose = require('mongoose');
const Client = require('../models/clientModel');

module.exports = new class ClientRepository {
    getAll() {
        return Client.find();
    }

    getById(id) {
        return Client.findById(id);
    }

    create(client) {
        console.log(client);
        return Client.create(client)
    }

    update(id, client) {
        const updatedClient = {
            name: client.name,
            document: client.document,
            mail: client.mail,
            phone: client.phone,
            type: client.type
        }
        return Client.findOneAndUpdate(id, updatedClient, { new: true });
    }

    delete(id) {
        return Client.findOneAndDelete(id);
    }
}