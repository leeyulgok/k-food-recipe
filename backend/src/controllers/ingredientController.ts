import { Request, Response } from "express";
const searchByIngredient = require("../utils/categoryByIngredient");

async function ingredientController(req: Request, res: Response) {
  try {
    const ingredient = req.params.ingredient;
    const recipes = await searchByIngredient(ingredient);
    res.json(recipes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "알 수 없는 오류 발생" });
    }
  }
}

module.exports = ingredientController;