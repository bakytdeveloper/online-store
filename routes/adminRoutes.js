// server/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const AdminController = require('./../controllers/AdminController');

router.get('/products', AdminController.getAllProductsAdmin);
router.get('/orders', AdminController.getAllOrdersAdmin);
router.get('/users', AdminController.getAllUsersAdmin);
router.post('/edit-product', AdminController.editProduct);


module.exports = router;
