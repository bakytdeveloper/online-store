// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/UserController'); // создайте файл controllers/UserController.js

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);


router.post('/add-to-cart', UserController.addToCart);
router.post('/remove-from-cart', UserController.removeFromCart);
router.post('/edit-cart', UserController.editCart);
router.post('/confirm-order', UserController.confirmOrder);


module.exports = router;
