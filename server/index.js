var db = require('../database/database.js');
const express = require('express');
//const port = 3000;
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req,res) => {
  db.productTest((err,data) => {
    if(err) {
      res.status(400);
      console.log(err.message);
    } else {
      res.send(data);
    }
  })
})

app.get('/products/:product_id', (req,res) => {
  let productId = req.params.product_id;
  db.productInfo(productId, (err,data) => {
    if(err) {
      res.status(400);
      console.log(err.message);
    } else {
      res.send(data);
    }
  })
})

app.get('/products/:product_id/styles', (req,res) => {
  let productId = req.params.product_id;
  db.productStyle(productId, (err,data) => {
    if(err) {
      res.status(400);
      console.log(err.message);
    } else {
      res.send(data);
    }
  })
})

app.get('/products/:product_id/related', (req,res) => {
  let productId = req.params.product_id;
  db.relatedProducts(productId, (err,data) => {
    if(err) {
      res.status(400);
      console.log(err.message);
    } else {
      res.send(data);
    }
  })
})



//console.log(process.env);

/*app.listen(port, () => {
  console.log(`Successfully connected to the port ${port}`)
})*/

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Successfully connected to the port ${PORT}`)
  });
}


module.exports = app;