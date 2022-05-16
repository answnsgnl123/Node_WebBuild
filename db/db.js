 const mysql = require("mysql");

 const db = mysql.createConnection({
        host : '34.64.249.235',
        port: '3306',
        user:  'admin',
        password: 'qwer1234',
        database: 'usersinfo',
 });

 db.connect((err) => {
   if(err) throw err;
   console.log('Connected');
 });

const sql = "SELECT * FROM MAMBER";
db.query(sql, (err, rows, fields) => {
  if(err) console.log(err);
  console.log('rows',rows);
  console.log('fields',fields);
});



 module.exports = db;