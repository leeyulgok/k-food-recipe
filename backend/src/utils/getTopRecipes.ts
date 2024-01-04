const pool = require("../config/dbConfig");

async function getTopRecipes() {
  try {
    const [rows] = await pool.query("SELECT * FROM recipes ORDER BY INQ_CNT DESC LIMIT 4");
    return rows;
  } catch (error) {
    console.error("Error fetching top recipes:", error);
    throw error;
  }
}

module.exports = getTopRecipes;
