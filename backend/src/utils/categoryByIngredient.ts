const pool = require('../config/dbConfig');

async function categoryByIngredient(ingredient: string) {
  try {
    const query = "SELECT * FROM recipes WHERE CKG_MTRL_ACTO_NM=?";
    const [rows] = await pool.query(query, [`${ingredient}`]);
    return rows;
  } catch (error) {
    console.error('Error during the database query:', error);
    throw error;
  }
}

module.exports = categoryByIngredient;
