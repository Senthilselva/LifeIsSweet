-- ### Schema

-- # user has many coupons 
-- # coupon has many users 

-- # users table
-- 	# id
-- 	# email
-- 	# password_hash
-- 	# username
--  # type- child/Caregiver

	-- 1 tyler
	-- 2 rhyna
	-- 3 andrew

-- # children table
--  # id
--  # user_id
--  # basal 
--  # morningbolus
--  # afternoonbolus
--  # dinnerbolus
--  # primaryCaregiver_id


-- # child_caregivers table
--  # id
--  # user_id //child  
--  # user_id // caregivers
--  # action_user_id



-- # MealLog 
-- 	# id
-- 	# datelogged
-- 	# carbs
-- 	# bgl
-- 	# timelogged
-- 	# bolusAmount




CREATE DATABASE bgl_db;
USE bgl_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	is_child boolean NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE children
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	company_name varchar(255) NOT NULL,
	basal decimal(5, 3) NOT NULL,
	morning_bolus decimal(5, 3) NOT NULL,
	noon_bolus decimal(5, 3) NOT NULL,
	night_bolus decimal(5, 3) NOT NULL,
	child_user_id INT NOT NULL,
	primary_caregiver_id INT NOT NULL, 
	FOREIGN KEY (child_user_id) references users(id),
	FOREIGN KEY (primary_caregiver_id) references users(id)

);


CREATE TABLE child_caregivers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	child_user_id int NOT NULL, 
	caregiver_user_id int NOT NULL, 
	relation tinyint NOT NULL, 
	FOREIGN KEY (child_user_id) references users(id),
	FOREIGN KEY (caregiver_user_id) references users(id)
);

CREATE TABLE meal_log
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	date_logged date NOT NULL,
	carbs int,
	bgl int,
	timelogged varchar(255),
	bolusAmount int,
    child_user_id int NOT NULL,
	FOREIGN KEY (child_user_id) references users(id)
)







