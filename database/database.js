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

const allProducts = async (page, count, callback) => {
  const queryString = `SELECT * FROM product ORDER BY id LIMIT ${count} OFFSET ${page * count}`;
  await pool.query(queryString, (err, res) => {
    if(err) {
      console.log(err.message);
    } else {
      callback(null, res.rows);
    }
  })
}

const productInfo = async (product_id, callback) => {
  const queryString = `SELECT product.id, product.name, product.slogan, product.description, product.category, product.default_price::text, json_agg(json_build_object('feature', features.feature, 'value', features.value)) AS features
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


const productStyle = async (product_id, callback) => {
  const queryString = `SELECT product_id, json_agg(json_build_object('style_id', id, 'name', name, 'original_price', original_price::text, 'sale_price', sale_price::text,'default?', default_style,
  'photos',
  (SELECT json_agg(json_build_object('thumbnail_url',thumbnail_url, 'url', url ))
  FROM photos WHERE style_id = styles.id
  GROUP BY style_id),
  'skus',
  (SELECT json_object_agg(id,json_build_object('quantity', quantity, 'size', size))
  FROM skus WHERE style_id = styles.id
  GROUP BY style_id)
  )) AS results FROM styles
  WHERE styles.product_id = ${product_id}
  GROUP BY product_id
  `;
  await pool.query(queryString, (err,res) => {
    if(err) {
      console.log(err.message);
    } else {
      callback(null, res.rows);
    }
  })
}

const relatedProducts = async (product_id, callback) => {
  const queryString = `SELECT json_agg(related_product_id) AS related
  FROM related WHERE current_product_id = ${product_id}`
  await pool.query(queryString, (err,res) => {
    if(err) {
      console.log(err.message);
    } else {
      callback(null, res.rows[0].related);
    }
  })
}
module.exports = {
  allProducts : allProducts,
  productInfo : productInfo,
  productStyle: productStyle,
  relatedProducts: relatedProducts
};