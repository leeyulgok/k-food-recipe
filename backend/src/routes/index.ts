import express from "express";
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get("/", mainController);

module.exports = router;
