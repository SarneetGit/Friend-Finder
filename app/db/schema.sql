CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE friends
(
	friend_id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	photo varchar(255) NOT NULL,
    score varchar(255) NOT NULL,
	PRIMARY KEY (friend_id)
);