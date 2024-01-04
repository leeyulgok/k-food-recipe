"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');
router.get('/:ingredient', ingredientController);
module.exports = router;
