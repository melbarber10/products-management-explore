// routes/index.js
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

// Home page route
router.get('/', indexController.homePage);

// About page route
router.get('/about', indexController.aboutPage);

module.exports = router;
