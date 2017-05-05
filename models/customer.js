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
      classMethods: 
      {
        associate: function(models) 
        {
          // Creates one-to-one association with Pizza table.
          // Creates foreign key 'PizzaId' in `Customer` table. 
          Customer.belongsTo(models.Pizza);
        } 
      }
    },
    
    {
      freezeTableName: true,
      timestamps: false
    }
  
  );//END var Customer
  return Customer;
};