"use strict";
var fs = require("fs");
var csv = require("csv-parser");
var mysql = require("mysql2");
var path = require('path');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "k_food_recipe_db",
    charset: 'utf8mb4',
});
// 데이터베이스에 연결
connection.connect(function () {
    console.log("DB 연결 성공");
});
// CSV 파일 읽기 및 파싱
var FILE_PATH = path.join(process.cwd(), '../', 'public', 'data', 'TB_RECIPE_SEARCH.csv');
var results = [];
fs.createReadStream(FILE_PATH)
    .pipe(csv())
    .on("data", function (data) { return results.push(data); })
    .on("end", function () {
    insertDataIntoDatabase(results);
});
// 데이터베이스에 데이터 삽입
function insertDataIntoDatabase(data) {
    data.forEach(function (row) {
        var query = "INSERT INTO recipes SET ?";
        connection.query(query, row, function (error, results, fields) {
            if (error) {
                console.error("Error inserting data: ", error);
                return;
            }
            console.log("Row inserted with ID: ", results.insertId);
        });
    });
    connection.end();
}
