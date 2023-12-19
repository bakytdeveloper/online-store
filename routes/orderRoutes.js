// server/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const OrderController = require('./../controllers/OrderController');
const { authenticateUser } = require('../middleware/authMiddleware');


router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrderById);
router.post('/', authenticateUser, OrderController.createOrder);
router.post('/checkout', authenticateUser, OrderController.checkout);
router.post('/update-status', authenticateUser, OrderController.updateOrderStatus);


module.exports = router;
