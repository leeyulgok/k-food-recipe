const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

router.get('/:ingredient', ingredientController);

module.exports = router;
