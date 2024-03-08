const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'tobbe',
  password: 'xxxx',
  database: 'maa'
});
module.exports = connection;