// Import the ORM to create functions that will interact with the database.
const ORM = require("../config/orm.js");

const PIZZA = {
  selectAll: function(cb) {
    ORM.selectAll("pizzas", function(res) {
      cb(res);
    });
  },
  insertOne: function(pizza, cb) {
    ORM.insertOne("pizzas", pizza, function(res) {
      cb(res);
    });
  },
  updateOne: function(pizzaId, cb) {
    ORM.updateOne("pizzas", pizzaId , function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (pizzas_controller.js).
module.exports = PIZZA;