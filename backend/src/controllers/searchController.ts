import { Request, Response } from "express";
const getSearchRecipes = require("../utils/getSearchRecipes");
const getRealTimeSearchResult = require('../utils/getRealTimeSearchResult');

async function searchController(req: Request, res: Response) {
  try {
    const searchQuery = req.query.search;
    const searchType = req.query.type;

    let recipes;
    if (searchType === 'dynamic') {
      recipes = await getRealTimeSearchResult(searchQuery);
    } else {
      recipes = await getSearchRecipes(searchQuery);
    }
    res.json(recipes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "알 수 없는 오류 발생" });
    }
  }
}

module.exports = searchController;
