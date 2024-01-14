"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const passport = require('../utils/passport');
const router = express.Router();
router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/callback', passport.authenticate('google', {
    successRedirect: '/signup-success',
    failureRedirect: '/signup-fail'
}));
module.exports = router;
