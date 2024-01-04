const pool = require('../../config/dbConfig');
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

async function handleReconnect() {
  let connected = false;
  while (!connected) {
    try {
      await pool.getConnection();
      connected = true;
      console.log("Reconnected to the database.");
    } catch (error) {
      console.error("Reconnection failed, retrying...", error);
      await handleReconnect();
    }
  }
}

async function insertDataIntoDatabase(data: any) {
  for (const row of data) {
    try {
      const query = "INSERT INTO recipes SET ?";
      const [results] = await pool.query(query, row);
      console.log("Row inserted with ID: ", results.insertId);
    } catch (error: any) {
      console.error("Error inserting data: ", error);
      if (
        error.code === "PROTOCOL_CONNECTION_LOST" ||
        error.code === "ECONNREFUSED"
      ) {
        console.log("Reconnecting to the database...");
        await handleReconnect();
      } else {
        throw error;
      }
    }
  }
}

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
    insertDataIntoDatabase(results).then(() => {
      pool.end();
    });
  });
