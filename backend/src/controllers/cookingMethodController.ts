import { Request, Response } from "express";
const searchByCookingMethod = require("../utils/categoryByCookingMethod");

async function cookingMethodController(req: Request, res: Response) {
  try {
    const cookingMethod = req.params.cookingMethod;
    const recipes = await searchByCookingMethod(cookingMethod);
    res.json(recipes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "알 수 없는 오류 발생" });
    }
  }
}

module.exports = cookingMethodController;
