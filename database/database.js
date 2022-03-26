const {Pool, Client} = require('pg');
const {key} = require('../config.js')

// connet with a connection pool

const pool = new Pool({
  user:'root',
  host: 'localhost',
  database: 'sdc',
  password: key,
  port: 5432,
});

const productTest = async(callback) => {
  const queryString = 'SELECT * FROM product WHERE id = 1';
  await pool.query(queryString, (err, res) => {
    if(err) {
      console.log(err.message);
    } else {
      console.log('query response', res)
      callback(null, res);
    }
  })
}

module.exports = {porductTest:productTest}
