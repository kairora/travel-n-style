CREATE database travelNstyle_db;
USE travelNstyle_db;

CREATE TABLE destination 
(
    id integer NOT NULL AUTO_INCREMENT,
    destination varchar (200) NOT NULL,
    address varchar(200) NOT NULL,
    PRIMARY KEY (ID)
)

