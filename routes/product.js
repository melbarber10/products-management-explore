// routes/product.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

// Add product routes
router.get('/add', productController.getAddProduct);
router.post('/add', productController.postAddProduct);

// Edit product routes
router.get('/edit/:id', productController.getEditProduct);
router.post('/edit/:id', productController.postEditProduct);

// Delete product route
router.post('/delete/:id', productController.deleteProduct);

module.exports = router;
