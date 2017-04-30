//Dependency
const MYSQL = require('mysql');

let connection;

//If connected to JAWS DB, connection gets configures from JAWSDB_URL
if(process.env.JAWSDB_URL)
{
  connection = MYSQL.createConnection(process.env.JAWSDB_URL);
}
// else connection is local MySQL database. 
else
{ 
	connection = MYSQL.createConnection({
    host: "localhost",
    user: "root",
    password: "test",
    database: "pizzas_db"
  });
}

//Establishes DB connection
connection.connect(function(err){
  if (err) 
  {
    console.error("error connecting: " + err.stack);
    return;
  }
  
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;