// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/UserController'); // создайте файл controllers/UserController.js
const { authenticateUser, authorizeUser } = require('../middleware/authMiddleware');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);


router.post('/add-to-cart', authenticateUser, UserController.addToCart);
router.post('/remove-from-cart', authenticateUser, UserController.removeFromCart);
router.post('/edit-cart', authenticateUser, UserController.editCart);
router.post('/confirm-order', authenticateUser, UserController.confirmOrder);

router.get('/profile', authenticateUser, UserController.getUserProfile);
router.post('/update-profile', authenticateUser, UserController.updateUserProfile);

// Добавим authorizeUser для контроля доступа к роутам
router.get('/admin-page', authenticateUser, authorizeUser(['admin']), (req, res) => {
    res.json({ message: 'Welcome to the admin page.' });
});


module.exports = router;
