//Dependencies
const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const METHOD_OVERIDE = require('method-override');
const EXPHBS = require("express-handlebars");

// Import routes and give the server access to them.
const ROUTES = require("./controllers/pizzas_controller.js");

const PORT = process.env.PORT || 3000;

const APP = EXPRESS();

// Serve static content for the app from the "public" directory in the application directory.
APP.use(EXPRESS.static(process.cwd() + "/public"));

APP.use(BODY_PARSER.urlencoded({ extended: false }));

// Not sure if I need.
// Override with POST having ?_method=DELETE
APP.use(METHOD_OVERIDE("_method"));

// Set Handlebars.
APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

APP.use("/", ROUTES);

APP.listen(PORT, () => console.log("listening on port:", PORT));