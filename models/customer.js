// customer.js - model for `Customer` table using Sequelize.


module.exports = function(sequelize, DataTypes) 
{
  var Customer = sequelize.define("Customer",
    {  
      customer_name: 
      {
        type: DataTypes.STRING,
        // Flag that restricts a customer_name from being entered if it doesn't have len > 0
        allowNull: false, //this does not catch empty strings just 'null'
        validate: 
        {
          //restricts customer_name from if value is empty  
          notEmpty: true
        }      
      }
    },
      
    {
      freezeTableName: true,  //  prevents sequilize from making table name plural.
      timestamps: false       //  prevents sequilize from adding `updatedAt` and `createdAt` columnss.
    }
  
  );//END var Customer
  return Customer;
};