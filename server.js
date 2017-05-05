//Dependencies
const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const EXPHBS = require("express-handlebars");

// Import routes and give the server access to them.
const ROUTES = require("./controllers/pizzas_controller.js");

const db = require("./models");

const PORT = process.env.PORT || 3000;

const APP = EXPRESS();

// Serve static content for the app from the "public" directory in the application directory.
APP.use(EXPRESS.static(process.cwd() + "/public"));

APP.use(BODY_PARSER.urlencoded({ extended: false }));

// Set Handlebars.
APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

APP.use("/", ROUTES);

db.sequelize.sync().then(function() 
{
	APP.listen(PORT, () => console.log("listening on port:", PORT));
});	