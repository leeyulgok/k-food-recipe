const pool = require('../config/dbConfig');

async function getsearchRecipes(searchQuery: string) {
  try {
    const query = "SELECT * FROM recipes WHERE LOWER(CKG_NM) LIKE LOWER(?)";
    const [rows] = await pool.query(query, [`%${searchQuery}%`]);
    return rows;
  } catch (error) {
    console.error('Error during the database query:', error);
    throw error;
  }
}

module.exports = getsearchRecipes;
