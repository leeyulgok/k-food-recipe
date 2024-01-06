const pool = require('../config/dbConfig');

async function getRealTimeSearchResult(searchQuery: string) {
  try {
    let query = `
      SELECT * FROM recipes
      WHERE LOWER(CKG_NM) LIKE LOWER(?)
         OR LOWER(CKG_NM_KO) LIKE LOWER(?)
      LIMIT 1`;
    let formattedSearchQuery = `${searchQuery}%`;
    let [rows] = await pool.query(query, [formattedSearchQuery, formattedSearchQuery]);

    if (rows.length === 0) {
      formattedSearchQuery = `%${searchQuery}%`;
      [rows] = await pool.query(query, [formattedSearchQuery, formattedSearchQuery]);
    }

    return rows;
  } catch (error) {
    console.error('Error during the database query:', error);
    throw error;
  }
}

module.exports = getRealTimeSearchResult;
