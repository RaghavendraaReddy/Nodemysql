const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'resto',
    port:7306
 });
 
module.exports = connection;