DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id int not null auto_increment,
product_name VARCHAR(40) NULL,
department_name VARCHAR(40) NULL,
price DEC (6,2) NULL,
stock_quantity INT NULL,
primary key (item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Adidas Yeezy 350 Boost", "Shoes", 800.00, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple MacBook Pro", "Electronics", 1200.00, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leather Oval Chair", "Home", 300.00, 312);


update products
set stock_quantity = 320
where item_id = 3;

update products
set product_name = "Brown Leather Chair"
where item_id = 3;

SELECT * FROM bamazon.products;