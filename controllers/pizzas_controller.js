const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

// Requiring our models
const db = require("../models");






// need to do a join here
// see what res.json.(reutrned object) looks like
// return proper object.

//Create all our routes and set up logic within those routes where required.
ROUTER.get("/", function(req, res) {
  db.Customer.findAll(
  {
    include: [db.Pizza]
  })
  .then(function(data) 
  {
    let hbsObject = 
    {
      pizzas: data
    };
    res.render("index", hbsObject);
  });
});

//INSERT Pizza
ROUTER.post("/pizza", function(req, res) {

  //checks if pizaa_name is not empty;
  if(req.body.pizza_name !== "")
  {  
    db.Pizza.create(req.body).then(function() {
      res.redirect("/");
    });
  }
  else
    res.redirect("/");

});



//INSERT Customer
ROUTER.post("/customer/:id", function(req, res) 
{
 
  var pizzaID = req.params.id;
  var customer = req.body.customer_name.toUpperCase();
  
  db.Customer.create({customer_name: customer, PizzaId: pizzaID})
  .then(function() 
  {
     res.redirect("/");        
  });

});





//==============================================
//==========================================
//               THis is a test
//=========================================
//==========================================
ROUTER.get("/", function(req, res) 
{

    
  db.Customer.findAll(
  {
    //where: query,
    include: [db.Pizza]
  })
  .then(function(dbPost) 
  {
    res.json(dbPost);
  }); 
});
// //==============================================
//==========================================




// Export routes for server.js to use.
module.exports = ROUTER;


