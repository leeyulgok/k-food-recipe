"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
router.get('/', searchController);
module.exports = router;
