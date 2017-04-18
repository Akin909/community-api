const express = require('express');
const url = require('url');
const bodyparser = require('body-parser');

const get = require('./database/get');
const post = require('./database/post');

const app = express();

// Allow CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyparser.json());
app.get('/products', (req, res) => {
  get.products(req.query.id, (dbError, dbResponse) => {
    if (dbError) {
      return console.log(dbError);
    }
    res.send(dbResponse);
  });
});

app.post('/add-product', (req, res) => {
  post.addProduct(req.body, (dbError, dbResponse) => {
    if (dbError) {
      return console.log(dbError);
    }
    console.log('dbResponse', dbResponse);
    res.send(dbResponse);
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
