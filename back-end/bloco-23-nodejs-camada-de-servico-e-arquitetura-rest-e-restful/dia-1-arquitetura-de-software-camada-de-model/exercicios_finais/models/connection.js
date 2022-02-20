const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'alexandrexpjr',
  password: '@Ab123456',
  database: 'users_crud' });

module.exports = connection;