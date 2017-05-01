module.exports = function(sequelize, DataTypes) {
  var Pizza = sequelize.define("Pizza", {
    pizza_name: {
      type: DataTypes.STRING,
      // Flag that restricts a pizza from being entered if it doesn't have len > 0
      allowNull: false, //this does not catch empty strings just 'null'
      validate: {
        len: [1]
      }      
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // Flag that defaults a new pizza's `devoured` to false.
      defaultValue: false
    }
      
  });
  return Pizza;
};
