// server/models/ProductModel.js
const mongoose = require('mongoose');

const characteristicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
    direction: { type: String, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    images: [{ type: String }],
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    characteristics: [characteristicSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
