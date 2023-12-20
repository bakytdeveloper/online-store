// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('./../controllers/ProductController');

// router.get('/', ProductController.getAllProducts);
// router.get('/:id', ProductController.getProductById);
// router.post('/', ProductController.addProduct);
// router.delete('/:id', ProductController.deleteProductById);
//
//
// // Добавим новые роуты для направлений и типов
// router.get('/directions', ProductController.getAllDirections);
// router.get('/types', ProductController.getAllTypes);


router.get('/directions', ProductController.getAllDirections);
router.get('/types', ProductController.getAllTypes);

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;



// module.exports = router;
