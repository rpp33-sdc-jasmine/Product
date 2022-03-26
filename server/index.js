var models = require('../database/database.js');
const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req,res) => {
  models.productTest((err,data) => {
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