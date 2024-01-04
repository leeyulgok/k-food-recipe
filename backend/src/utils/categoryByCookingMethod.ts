const pool = require('../config/dbConfig');

async function categoryByCookingMethod(cookingMethod: string) {
  try {
    const query = "SELECT * FROM recipes WHERE CKG_MTH_ACTO_NM=?";
    const [rows] = await pool.query(query, [`${cookingMethod}`]);
    return rows;
  } catch (error) {
    console.error('Error during the database query:', error);
    throw error;
  }
}

module.exports = categoryByCookingMethod;
