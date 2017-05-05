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
          
    {
      freezeTableName: true,
      timestamps: false
    }
  );//END Pizza
  return Pizza;
};
