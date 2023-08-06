DROP DATABASE IF EXISTS employeeRoundUp_db;
CREATE DATABASE employeeRoundUp_db;

USE employeeRoundUp_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) ,
    salary DECIMAL,
department_id INT,
 INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

    CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 firstName varchar(30),
 lastName varchar(30),
 role_id INT, 
 INDEX role_ind (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
 manager_id INT,
   INDEX man_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);





