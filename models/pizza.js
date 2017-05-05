// pizza.js - model for `Pizza` table using Sequelize.

module.exports = function(sequelize, DataTypes) 
{
  var Pizza = sequelize.define("Pizza", 
    {
      pizza_name: 
      {
        type: DataTypes.STRING,
        // Flag that restricts a pizza from being entered if it is empty
        allowNull: false, //this does not catch empty strings just 'null'
        validate: 
        {
          //restricts a pizza_name if value is empty  
          notEmpty: true
        }      
      },

      devoured: 
      {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
      
    {    
      classMethods: 
      {
        associate: function(models) 
        {
          // Creates one-to-one association with `Customer` table.
          // Creates foreign key 'CustomerId' in `Pizza` table. 
          Pizza.belongsTo(models.Customer);
        } 
      },
      
      freezeTableName: true,   //  prevents sequilize from making table name plural.
      timestamps: false        //  prevents sequilize from adding `updatedAt` and `createdAt` columns. 
    }
   
  );//END Pizza
  return Pizza;
};
