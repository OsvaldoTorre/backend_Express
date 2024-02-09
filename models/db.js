const config = require('../config/config')
const mysql = require('mysql2');

const db = mysql.createConnection(config.databaseURL);

db.connect((err) => {
  if(err) {
    throw err;
  }
  //console.log('Conexión a la base de datos MySQL establecida');
});

module.exports = db;