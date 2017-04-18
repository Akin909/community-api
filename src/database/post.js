const connect = require('./db_connect');

const post = {};

post.addProduct = ({ product_name, price, image_url }, callback) => {
  const sqlQuery = `INSERT INTO products (product_name, price, image_url, slug) VALUES
  ($1, $2, $3, $4)
  RETURNING id; 
  `;
  connect.query(
    sqlQuery,
    [product_name, parseInt(price), image_url, product_name],
    (dbError, dbResponse) => {
      if (dbError) {
        return console.log(dbError);
      }
      callback(null, dbResponse.rows[0]);
    }
  );
};

module.exports = post;
