var db = require('../database/database.js');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const helper = require('./helper.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req,res) => {
  let{page, count} = req.query;
  if(page === undefined) {
    //page need to be 0, otherwise will skipping rows = count
    page = 0;
  }
  if(count === undefined) {
    count = 5;
  }

  db.allProducts(page, count, (err,data) => {
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
      let dataRev = helper.stylePhotos(data);
      res.send(dataRev);
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




if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Successfully connected to the port ${PORT}`)
  });
}


module.exports = app;