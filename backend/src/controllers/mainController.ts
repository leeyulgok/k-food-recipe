import { Request, Response } from 'express';

const getTopRecipes = require('../utils/getTopRecipes');

async function mainController(req: Request, res: Response) {
  try {
    const recipes = await getTopRecipes();
    res.json(recipes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "알 수 없는 오류 발생" });
    }
  }
}

module.exports = mainController;
