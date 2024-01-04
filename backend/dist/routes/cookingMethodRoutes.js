"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const cookingMethodController = require('../controllers/cookingMethodController');
router.get('/:cookingMethod', cookingMethodController);
module.exports = router;
