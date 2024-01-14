const express = require('express');
const router = express.Router();
import { Request, Response } from "express";

router.get('/signup-success', (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.send('회원가입에 성공했습니다!'); 
  } else {
    res.redirect('/');
  }
});

router.get('/signup-fail', (req: Request, res: Response) => {
  res.send('회원가입에 실패했습니다.'); 
});

module.exports = router;
