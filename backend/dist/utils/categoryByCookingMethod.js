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
function categoryByCookingMethod(cookingMethod) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM recipes WHERE CKG_MTH_ACTO_NM=?";
            const [rows] = yield pool.query(query, [`${cookingMethod}`]);
            return rows;
        }
        catch (error) {
            console.error('Error during the database query:', error);
            throw error;
        }
    });
}
module.exports = categoryByCookingMethod;
