"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get('/signup-success', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('회원가입에 성공했습니다!');
    }
    else {
        res.redirect('/');
    }
});
router.get('/signup-fail', (req, res) => {
    res.send('회원가입에 실패했습니다.');
});
module.exports = router;
