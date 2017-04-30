const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

// Import the model (cat.js) to use its database functions.
const PIZZA = require("../models/pizzas.js");

// Create all our routes and set up logic within those routes where required.
ROUTER.get("/", function(req, res) {
  PIZZA.selectAll(function(data) {
    var hbsObject = {
      pizzas: data
    };
    res.render("index", hbsObject);
  });
});

//INSERT
ROUTER.post("/", function(req, res) {
  // if newPizza is not ""
  if(req.body.newPizza)
  {  
    PIZZA.insertOne(req.body.newPizza, function() {
      res.redirect("/");
    });
  }
  else
    res.redirect("/");
});

//UPDATE
ROUTER.put("/:id", function(req, res) {
 
  PIZZA.updateOne(req.params.id, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = ROUTER;
