# Pizza Logger - Sequilized

This is a version of the [Pizza Logger](https://github.com/daquilino/Pizza) using Sequelize instead of a custom built ORM. New features added SAY HOW IT DIFFERS FROM ORIGINAL The App that lets users submit the names of differernt types of pizzas to eat, and keep track whether or no they have devoured them. The app utilizes MySQL (JAWSDB on Heroku), Node, Express, Handlebars and a homemade ORM and follows the MVC design pattern.

Whenever a user submits a pizza's name, the app will display the pizza and a corresponding `EAT ME!` button in a table on the left side (or top when responsive) of the page waiting to be devoured.  When user clicks the `EAT ME!` button, the pizza will move to a table on the right side (or bottom when responsive) of the page.


#### Directory structure / MVC design pattern 

```
.
├── config
│ 	└── config.json   
│ 
├── controllers
│   └── pizzas_controller.js
│
├── db
│   └── seeds.sql  
│
├─ .gitignore
│
├── models
│   ├── pizza.js
│	├── index.js
│	└── customer.js
│
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       └── img
│           └── pizza.png
│
├── README.md   
│
├── server.js
│
└── views
├── index.handlebars
└── layouts
   └── main.handlebars
```   


## Built With

* [Sublime Text](https://www.sublimetext.com/) - Text Editor.
* [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [MySQL](https://www.mysql.com/) - Open Source SQL Database.

###### NPM Packages

* [express](https://www.npmjs.com/package/express)	- Node.js web application framework that provides a robust set of features for web and mobile applications.
* [body-parser]() - Node.js body parsing middleware.
* [mysql](https://www.npmjs.com/package/mysql)	- This is a node.js driver for mysql.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - A Handlebars view engine for Express.
* [method-override](https://www.npmjs.com/package/method-override) - Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.


## Author

* **Douglas Aquilino** - [https://github.com/daquilino](https://github.com/daquilino)
