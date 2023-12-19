// server/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const OrderController = require('./../controllers/OrderController');

router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrderById);
router.post('/', OrderController.createOrder);
router.post('/checkout', OrderController.checkout);


module.exports = router;
