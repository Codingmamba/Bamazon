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

-- 1
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Adidas Yeezy 350 Boost", "Shoes", 800.00, 35);
-- 2
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple MacBook Pro", "Electronics", 1200.00, 45);
-- 3
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leather Oval Chair", "Home", 300.99, 312);
-- 4
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jordan 1 Chicago", "Shoes", 550.00, 12);
-- 5
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung 64\" 4K TV", "Electronics", 1200.99, 46);
-- 6
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tempurpedic King Mattress", "Home", 1100.00, 472);
-- 7
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Selsun Blue Shampoo 13oz.", "Bath", 11.99, 190);
-- 8
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("24 Pack Paper Towels", "Bath", 24.99, 205);
-- 9
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox One S 1TB", "Electronics", 350.99, 6);
-- 10
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("La-Z-Boy Leather Sofa", "Home", 99.99, 3);

update products
set stock_quantity = 320
where item_id = 3;

update products
set product_name = "Brown Leather Chair"
where item_id = 3;

SELECT * FROM bamazon.products;