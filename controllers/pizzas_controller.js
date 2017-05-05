//Create all our routes and set up logic within those routes where required.

const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

// Requiring our models
const db = require("../models");


ROUTER.get("/", function(req, res) 
{ 
  db.Pizza.findAll(
  {
    include: [db.Customer],
    order: 'pizza_name ASC' 
  })
  .then(function(dbPost) 
  {    
    let hbsObject = { pizzas: dbPost}; 
    res.render("index", hbsObject);
  }); 

});

//INSERT new Pizza
ROUTER.post("/pizza", function(req, res) 
{

  //checks if pizza_name is not empty;
  if(req.body.pizza_name !== "")
  {  
    db.Pizza.create(req.body).then(function() 
    {
      res.redirect("/");
    });
  }
  else
    res.redirect("/");

});

//INSERT new Customer
ROUTER.post("/customer/:id", function(req, res) 
{
 
  let pizzaID = req.params.id;
  let customer = req.body.customer_name.toUpperCase();
  
  //if customer is not empty
  if(customer !== "")
  { 

    db.Customer.create({customer_name: customer, PizzaId: pizzaID})
    .then(function(data) 
    {
      updatePizza(req, res, data.id);   
    });
  }
  else
    res.redirect("/");  
});

//Updates pizza, setting devoured to true and adds id of customer who devoured it.
function updatePizza(req,res,customerId)
{
  var updateObj = { 
    
    "devoured": true,  
    "CustomerId": customerId
  }; 

   db.Pizza.update(updateObj, {
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.redirect("/");
    }); 
}


// Export routes for server.js to use.
module.exports = ROUTER;
