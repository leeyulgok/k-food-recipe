const fs = require("fs");
const csv = require("csv-parser");
const mysql = require("mysql2");
const path = require("path");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  charset: process.env.DB_CHARSET,
});

// 데이터베이스에 연결
connection.connect(() => {
  console.log("DB 연결 성공");
});

// CSV 파일 읽기 및 파싱
const FILE_PATH = path.join(
  process.cwd(),
  "../",
  "public",
  "data",
  "TB_RECIPE_SEARCH.csv"
);
const results: any = [];
fs.createReadStream(FILE_PATH)
  .pipe(csv())
  .on("data", (data: any) => results.push(data))
  .on("end", () => {
    insertDataIntoDatabase(results);
  });

// 데이터베이스에 데이터 삽입
function insertDataIntoDatabase(data: any) {
  data.forEach((row: any) => {
    const query = "INSERT INTO recipes SET ?";
    connection.query(query, row, (error: any, results: any, fields: any) => {
      if (error) {
        console.error("Error inserting data: ", error);
        return;
      }
      console.log("Row inserted with ID: ", results.RCP_SNO);
    });
  });

  connection.end();
}
