// make this a class" " and it should only have methodes
// each methode should do some SQl action
// ex:
// find all employees => 'select * from employee'
const connection = require('./connection.js')
// Follow those steps and redo for as many times as you need


// the rest ofthese functions will have the same syntax but different SQL for the db searcher

// fll these put and Update the 'select * from employee'

// use co-pilot / chat gpt for SQL startements for the db


class One {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.promise().query('select * from employee')
    }

    findAllDepartments() {
        return this.connection.promise().query('select * from department')
    }
    findAllRoles() {
        return this.connection.promise().query('select * from role')
    }

    addDepartment(department) {

        return this.connection.promise().query(`INSERT INTO department (name) VALUES ("${department}");`)

}

    addRole(title, salary,department_id) {
        console.log("Adding a role in my db function")

        return this.connection.promise().query(`INSERT INTO role (title, salary, department_id) VALUES ("${title}", ${salary}, ${department_id});`)
        
    }
    addEmployee(employee) {

        return this.connection.promise().query(`INSERT INTO employee (firstname, lastname, role_id) VALUES ("${firstName}, ${lastName}, ${role_id}");`)
    }


    updateEmployee(role_id, id) {
    
    return this.connection.promise().query(`UPDATE employee SET role_id = ${role_id} WHERE id = ${id};`);
   
    }

}

module.exports = new One(connection);