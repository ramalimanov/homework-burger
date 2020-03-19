
var mysql = require('mysql');
var connection;


if(process.env.JAWSDB_URL){
  console.log(process.env.JAWSDB_URL);

  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  console.log("not running to server");
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', 
    database : 'burgers_db' 
  });
}

module.exports = connection;