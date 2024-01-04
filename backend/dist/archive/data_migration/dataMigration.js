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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var pool = require('../../config/dbConfig');
var fs = require("fs");
var csv = require("csv-parser");
var path = require("path");
function handleReconnect() {
    return __awaiter(this, void 0, void 0, function () {
        var connected, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    connected = false;
                    _a.label = 1;
                case 1:
                    if (!!connected) return [3 /*break*/, 7];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, pool.getConnection()];
                case 3:
                    _a.sent();
                    connected = true;
                    console.log("Reconnected to the database.");
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.error("Reconnection failed, retrying...", error_1);
                    return [4 /*yield*/, handleReconnect()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function insertDataIntoDatabase(data) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, data_1, row, query, results_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, data_1 = data;
                    _a.label = 1;
                case 1:
                    if (!(_i < data_1.length)) return [3 /*break*/, 9];
                    row = data_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 8]);
                    query = "INSERT INTO recipes SET ?";
                    return [4 /*yield*/, pool.query(query, row)];
                case 3:
                    results_1 = (_a.sent())[0];
                    console.log("Row inserted with ID: ", results_1.insertId);
                    return [3 /*break*/, 8];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error inserting data: ", error_2);
                    if (!(error_2.code === "PROTOCOL_CONNECTION_LOST" ||
                        error_2.code === "ECONNREFUSED")) return [3 /*break*/, 6];
                    console.log("Reconnecting to the database...");
                    return [4 /*yield*/, handleReconnect()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6: throw error_2;
                case 7: return [3 /*break*/, 8];
                case 8:
                    _i++;
                    return [3 /*break*/, 1];
                case 9: return [2 /*return*/];
            }
        });
    });
}
// CSV 파일 읽기 및 파싱
var FILE_PATH = path.join(process.cwd(), "../", "public", "data", "TB_RECIPE_SEARCH.csv");
var results = [];
fs.createReadStream(FILE_PATH)
    .pipe(csv())
    .on("data", function (data) { return results.push(data); })
    .on("end", function () {
    // 데이터 이관 함수 호출...
});
