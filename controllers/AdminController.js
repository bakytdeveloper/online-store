// server/controllers/AdminController.js
const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');

const getAllProductsAdmin = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const getAllOrdersAdmin = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'email');
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const getAllUsersAdmin = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


const editProduct = async (req, res) => {
    try {
        const { productId, updatedFields } = req.body;

        const product = await Product.findByIdAndUpdate(productId, updatedFields, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.json({ message: 'Product updated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


module.exports = { getAllProductsAdmin, getAllOrdersAdmin, getAllUsersAdmin, editProduct };
