
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INTEGER PRIMARY KEY,
burger_name VARCHAR(100),
devoured BOOLEAN,
date TIMESTAMP);
