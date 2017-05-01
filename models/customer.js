module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer_name: 
    {
      type: DataTypes.STRING,
      // Flag that restricts a pizza from being entered if it doesn't have len > 0
      allowNull: false, //this does not catch empty strings just 'null'
      validate: 
      {
        len: [1]
      }      
    }
      
  });
  return Customer;
};