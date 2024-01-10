"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require('../config/dbConfig');
function getsearchRecipes(searchQuery) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      SELECT * FROM recipes
      WHERE LOWER(CKG_NM) LIKE LOWER(?)
         OR LOWER(CKG_NM_KO) LIKE LOWER(?)`;
            let formattedSearchQuery = `${searchQuery}%`;
            let [rows] = yield pool.query(query, [formattedSearchQuery, formattedSearchQuery]);
            if (rows.length === 0) {
                formattedSearchQuery = `%${searchQuery}%`;
                [rows] = yield pool.query(query, [formattedSearchQuery, formattedSearchQuery]);
            }
            return rows;
        }
        catch (error) {
            console.error('Error during the database query:', error);
            throw error;
        }
    });
}
module.exports = getsearchRecipes;
