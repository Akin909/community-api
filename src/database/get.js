const connect = require('./db_connect');

const get = {};

get.products = (id, callback) => {
  const sqlQuery = `
    SELECT * FROM products ${id ? `WHERE id = '${id}'` : ''};
  `;

  connect.query(sqlQuery, (err, dbResponse) => {
    if (err) {
      return console.log(err);
    }
    // console.log('===== dbResponse.rows', dbResponse.rows);
    callback(null, dbResponse.rows);
  });
};

module.exports = get;
