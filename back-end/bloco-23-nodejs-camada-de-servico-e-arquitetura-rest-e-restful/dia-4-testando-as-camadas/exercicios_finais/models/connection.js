const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'alexandrexpjr',
  password: '@Ab123456',
  database: 'model_example'});

module.exports = connection;