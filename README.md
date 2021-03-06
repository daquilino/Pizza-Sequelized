# Pizza Logger II - Sequilized

This is a version of my [Pizza Logger](https://github.com/daquilino/Pizza) app using Sequelize instead of a custom built ORM. Like the original, the app lets users submit the names of different types of pizzas to eat.  A feature of supplying a name when the 'eat me' button is clicked, keeping track of who ate what pizza, was added to the app. The app was build following the MVC design pattern and utilizing MySQL (JAWSDB on Heroku), Node, Express, Handlebars and Sequilize.


Whenever a user submits a pizza's name, the pizza is inserted into the 'Pizza' table, the app will alphabetically display the pizza, an input box, and a corresponding `EAT ME!` button in a table on the left side (or top when responsive) of the page waiting to be devoured. When the user enters a name and clicks the `EAT ME!` button, the name is inserted into the 'Customer' table, then the pizza is updated by its 'id'. Its 'devoured' value is to true, and its 'CustomerId' value is set to the 'id' value of name. The pizza will move to a table on the right side (or bottom when responsive) of the page showing its corresponding name.

## Models Overview

Two models are used in the app 'Pizza' and 'Customer' each with the following columns.

- Pizza
   - id (primary key)
   - pizza_name - string
   - devoured - boolean
   - CustomerId (foreign key from the 'Customer' table 'id' column)	

- Customer
   - id (primary key)
   - customer_name - string

There is a one-to-one association between the two models , 'Pizza' (source) and 'Customer' (target) , creating the foreign key 'CustomerID' in the 'Pizza' model using: 

```javascript
Pizza.belongsTo(models.Customer);
```

Using this association we can then query the database with a join statement thereby obtaining a table of pizzas with there associated customer by name.

```javascript
db.Pizza.findAll(
  {
    include: [db.Customer],
    order: 'pizza_name ASC' 
  }).then ....
```

## Directory structure / MVC design pattern 

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
* [mysql](https://www.npmjs.com/package/mysql)	- This is a node.js driver for MySQL.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - A Handlebars view engine for Express.

## Author

* **Douglas Aquilino** - [https://github.com/daquilino](https://github.com/daquilino)
