const express = require("express");
const passport = require("../utils/passport");
const router = express.Router();
import { NextFunction, Request, Response } from "express";
import { UserType } from "../utils/types/UserType";
import { getIsSuccessFromToken, verifyJWT } from "../utils/jwt";

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("google", { session: false }, (err: Error, user: UserType, info: any) => {
      if (!user) {
        const token = info.token;
        return res.redirect(`http://localhost:3000/signup/failure?token=${token}`);
      }
      const token = user.token;
      res.redirect(`http://localhost:3000/signup/success?token=${token}`);
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

module.exports = router;
