const express = require('express');
const app = express();
const ProductManager = require('./ProductManager');

app.get('/products', (req, res) => {
  const limit = req.query.limit;
  const products = ProductManager.getProducts();

  if (limit) {
    res.send({ products: products.slice(0, limit) });
  } else {
    res.send({ products });
  }
});
