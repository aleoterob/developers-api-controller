REST API controller created whith Node.js and Express.js that consumes Suapabase database to show information of table developers. The controller is consumed by my Next.js app called developers-front-next (Public repository developers-front-next)

CREATE TABLE developers ( 
id SERIAL PRIMARY KEY, 
full_name TEXT NOT NULL, 
age INTEGER, birth_date DATE,
phone_number VARCHAR(20),
nacionality TEXT,
summary VARCHAR(255),
stack VARCHAR(255),
main_stack_technology VARCHAR(255),
profile_image VARCHAR(255) );
