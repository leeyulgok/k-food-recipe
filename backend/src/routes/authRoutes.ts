const express = require("express");
const passport = require("../utils/passport");
const router = express.Router();
import { NextFunction, Request, Response } from "express";
import { UserType } from "../utils/types/UserType";
import { verifyJWT } from "../utils/jwt";

router.get(
  "/signup",
  passport.authenticate("google-signup", { scope: ["profile", "email"] })
);

router.get(
  "/login",
  passport.authenticate("google-login", { scope: ["profile", "email"] })
);

router.get(
  "/signup/callback",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("google-signup", { session: false }, (err: Error, user: UserType, info: any) => {
      if (!user) {
        const token = info.token;
        return res.redirect(`http://localhost:3000/signup/failure?token=${token}`);
      }
      const token = user.token;
      res.redirect(`http://localhost:3000/signup/success?token=${token}`);
    })(req, res, next);
  }
);

router.get(
  "/login/callback",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("google-login", { session: false }, (err: Error, user: UserType, info: any) => {
      if (!user) {
        req.session.errorMessage = 'Invalid credentials or user not found';
        return res.redirect(`http://localhost:3000/login`);
      }

      delete req.session.errorMessage;
      res.redirect(`http://localhost:3000/`);
    })(req, res, next);
  }
);


router.get("/auth-status", (req: Request, res: Response) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];

  const tokenData = verifyJWT(token);
  
  if (tokenData) {
    res.json({ isAuthenticated: true, isSuccess: tokenData.isSuccess });
  } else {
    res.json({ isAuthenticated: false });
  }
});

router.get('/session-message', (req: Request, res: Response) => {
  if (req.session.errorMessage) {
    res.json({ message: req.session.errorMessage });
    delete req.session.errorMessage;
  } else {
    res.json({ message: '' });
  }
});

router.get('/clear-session-message', (req: Request, res: Response) => {
  delete req.session.errorMessage;
  res.status(200).send('Session message cleared');
});

module.exports = router;
