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
const pool = require('../../config/dbConfig.ts');
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
function handleReconnect() {
    return __awaiter(this, void 0, void 0, function* () {
        let connected = false;
        while (!connected) {
            try {
                yield pool.getConnection();
                connected = true;
                console.log("Reconnected to the database.");
            }
            catch (error) {
                console.error("Reconnection failed, retrying...", error);
                yield handleReconnect();
            }
        }
    });
}
function insertDataIntoDatabase(data) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const row of data) {
            try {
                const query = "INSERT INTO recipes SET ?";
                const [results] = yield pool.query(query, row);
                console.log("Row inserted with ID: ", results.insertId);
            }
            catch (error) {
                console.error("Error inserting data: ", error);
                if (error.code === "PROTOCOL_CONNECTION_LOST" ||
                    error.code === "ECONNREFUSED") {
                    console.log("Reconnecting to the database...");
                    yield handleReconnect();
                }
                else {
                    throw error;
                }
            }
        }
    });
}
// CSV 파일 읽기 및 파싱
const FILE_PATH = path.join(process.cwd(), "../", "public", "data", "TB_RECIPE_SEARCH.csv");
const results = [];
fs.createReadStream(FILE_PATH)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
    insertDataIntoDatabase(results).then(() => {
        pool.end();
    });
});
