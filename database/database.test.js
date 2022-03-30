const {Pool, Client} = require('pg');
const {key} = require('../config.js')

// connet with a connection pool
const dbConnection = async(event, context) => {
  const pool = new Pool({
    user:'root',
    host: 'localhost',
    database: 'sdc',
    password: key,
    port: 5432,
  });


await pool.connect();

  try {
    const result = await pool.query('SELECT * FROM product WHERE id = 1;');
    console.log('query result', result.rows);
    pool.end();
    return success({ message: `${result.rowCount} item(s) returned`, data: result.rows, status: true });
  } catch (e) {
    console.error(e.stack);
    pool.end();
    return failure({ message: e, status: false });
  }

}