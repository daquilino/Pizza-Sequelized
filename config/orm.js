//Dependency
const CONNECTION  = require("./connection.js");

// ORM (Object Relational Mapper) 
const ORM = 
{
  //Selects all rows from table
  selectAll: function(table, cb) 
  {
    var queryString = "SELECT * FROM ??";
    
    CONNECTION.query(queryString, [table], function(err, result) {
       if (err) throw err;
      cb(result);
    });
  },
  // Inserts row into table
  insertOne: function(table, pizza, cb) 
  {
    var queryString = "INSERT INTO ?? (pizza_name, devoured) VALUES (?, 0)";     
    
    CONNECTION.query(queryString, [table, pizza], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  //Updates value of `devoure` to true of row with `id` = id. 
  updateOne: function(table, id,  cb) 
  {
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

    CONNECTION.query(queryString, [table, 1, id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = ORM;