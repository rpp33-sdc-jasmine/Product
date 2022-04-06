var db = require('../database/database.js');
const express = require('express');
const port = 3000;
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

app.listen(port, () => {
  console.log(`Successfully connected to the port ${port}`)
})