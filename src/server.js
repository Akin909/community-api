const express = require('express');
const url = require('url');
// const products = require('./database/products');

const app = express();

app.get('/products', (req, res) => {
  // const id = url.parse(req.url, true).query.id;
  // console.log('id', id);
  // res.header('Access-Control-Allow-Origin', '*');
  // if (id) {
  //   return res.send(products[id]);
  // }
  // res.send(products);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
