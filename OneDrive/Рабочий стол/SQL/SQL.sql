create database mycompany;

use mycompany;

create table products
(product_id int primary key auto_increment,
product_name varchar(25),
product_desription varchar(100),
product_cost int(10),
product_time varchar(20)
);

create table shoemaker
(shoemaker_id int primary key auto_increment,
shoemaker_name varchar(15),
shoemaker_specialization varchar(30),
shoemaker_experience int(10));

create table clients
(client_id int primary key auto_increment,
client_name varchar(15));

create table delivery
(delivery_id int primary key auto_increment,
delivery_country varchar(20),
delivery_period timestamp,
delivery_company varchar(20));

create table reviews
(reviews_id int primary key auto_increment,
reviews_text varchar(200));




alter table clients add constraint client_produts foreign key (client_id) references products(product_id);
alter table  clients add constraint client_reviews foreign key (client_id) references reviews(reviews_id);
alter table clients add constraint client_delivery foreign key(client_id) references delivery(delivery_id);
alter table products add constraint product_shoemaker foreign key (product_id) references shoemaker(shoemaker_id);
















