CREATE DATABASE work_db;

USE work_db;

CREATE TABLE department(
    id INT NOT NULL primary key,
    name varchar(30)
);

CREATE TABLE role(
    id INT NOT NULL primary key,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id INT PRIMARY KEY
)