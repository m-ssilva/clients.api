'use strict'
const mongoose = require('mongoose');
const Product = require('../models/productModel');

module.exports = new class ProductRepository {
    getAll() {
        return Product.find();
    }

    getById(id) {
        return Product.findById(id);
    }

    create(product) {
        console.log(product);
        return Product.create(product)
    }

    update(id, product) {
        const updatedProduct = {
            name: product.name,
            price: product.price,
        }
        return Product.findOneAndUpdate(id, updatedProduct, { new: true });
    }

    delete(id) {
        return Product.findOneAndDelete(id);
    }
}