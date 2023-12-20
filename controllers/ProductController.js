// server/controllers/ProductController.js
const Product = require('./../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

const deleteProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        await product.remove();
        res.json({ message: 'Product deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



const getAllDirections = async (req, res) => {
    try {
        const directions = await Product.distinct('direction');
        res.json(directions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// const getAllTypes = async (req, res) => {
//     try {
//         const types = await Product.distinct('type');
//         res.json(types);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// };



const getAllTypes = async (req, res) => {
    try {
        const { direction } = req.query;
        const filter = direction ? { direction } : {}; // Добавляем фильтр по направлению

        const types = await Product.distinct('type', filter);
        res.json(types);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



module.exports = { getAllProducts, getProductById, addProduct, deleteProductById,  getAllDirections, getAllTypes };
