const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

// Requiring our models
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
ROUTER.get("/", function(req, res) {
  db.Pizza.findAll({}).then(function(data) {
    let hbsObject = {
      pizzas: data
    };
    res.render("index", hbsObject);
  });
});

//INSERT
ROUTER.post("/", function(req, res) {

  // if newPizza is not ""
  if(req.body)
  {  
    db.Pizza.create(req.body).then(function() {
      res.redirect("/");
    });
  }
  else
    res.redirect("/");

});

//UPDATE
ROUTER.put("/:id", function(req, res) {
 
  db.Pizza.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.redirect("/");
    }); 
  
});

// Export routes for server.js to use.
module.exports = ROUTER;
