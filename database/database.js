const {Pool, Client} = require('pg');
const {key} = require('../config.js');

// connet with a connection pool

const pool = new Pool({
  user:'root',
  host: 'localhost',
  database: 'sdc',
  password: 'password',
  port: 5432,
});

/*const productTest = async (callback) => {
  const queryString = 'SELECT * FROM product WHERE id = 1';
  await pool.query(queryString, (err, res) => {
    if(err) {
      console.log(err.message);
    } else {
      //console.log('query response', res)
      callback(null, res.rows);
    }
  })
}*/

const productInfo = async (product_id, callback) => {
  const queryString = `SELECT product.id, product.name, product.slogan, product.description, product.category, product.default_price::text, json_agg(json_build_object('feature', features.feature, 'value', features.value))
  AS features
  FROM product
  LEFT JOIN features
  ON product.id = features.product_id
  WHERE product.id = ${product_id}
  GROUP BY product.id, product.name, product.slogan, product.description, product.category, product.default_price`;
  await pool.query(queryString, (err,res) => {
    if(err) {
      console.log(err.message);
    } else {
      callback(null, res.rows);
    }
  })
}


module.exports = {
  productInfo : productInfo

};
