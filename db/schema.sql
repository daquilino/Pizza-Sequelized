-- Use for MySQL
-- Don't use for Heroku JAWSDB
CREATE DATABASE pizzas_db;

-- For Heroku JAWSBD use given database name
USE pizzas_db;

-- Creates the table plans.
CREATE TABLE pizzas
(
	id INT AUTO_INCREMENT NOT NULL,
	pizza_name VARCHAR(256) NOT NULL,
	devoured BOOLEAN NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);
