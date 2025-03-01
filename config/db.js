// config/db.js
const oracledb = require('oracledb');
require('dotenv').config();

oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_PATH });

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING,
};

async function executeQuery(query, binds = [], options = { autoCommit: true }) {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(query, binds, options);
    return result;
  } catch (err) {
    console.error('DB Error:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeErr) {
        console.error('Error closing connection:', closeErr);
      }
    }
  }
}

module.exports = { executeQuery };
