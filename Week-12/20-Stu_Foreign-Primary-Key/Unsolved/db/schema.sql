-- Write your Schema Here -- 
DROP DATABASE IF EXISTS orders_db;
CREATE DATABASE orders_db;

USE orders_db;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customer_order (
    id INT NOT NULL,
    customer_id INT NULL,
    order_details TEXT NOT NULL,
    FOREIGN KEY (customer_id)
    -- customers table and id --
    REFERENCES customers(id)
    ON DELETE SET NULL
);

describe customers;
describe customer_order;

