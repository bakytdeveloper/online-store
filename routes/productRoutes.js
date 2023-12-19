// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('./../controllers/ProductController');

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;
