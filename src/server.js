const express = require('express');
const url = require('url');

const get = require('./database/get');
console.log('get', get);

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

app.get('/products', (req, res) => {
  get.products(req.query.id, (dbError, dbResponse) => {
    if (dbError) {
      return console.log(dbError);
    }
    res.send(dbResponse);
  });
});

app.post('/add-product', (req, res) => {
  console.log('===== req.payload', req.payload);
  res.send('hello');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
