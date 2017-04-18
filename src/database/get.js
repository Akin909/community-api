const connect = require('./db_connect');

const get = {};

get.products = callback => {
  const sqlQuery = `SELECT * FROM products;`;
  connect.query(sqlQuery, (err, dbResponse) => {
    if (err) {
      return console.log(err);
    }
    callback(null, dbResponse.rows);
  });
};

module.exports = get;
