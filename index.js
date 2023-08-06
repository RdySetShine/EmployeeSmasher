// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const db = require('./db/index.js')
const connection = require('./db/connection.js')
//const connection = require('./db/connection')

// require uses the single '' how it works 
// require goes into the node module and loads what you're asking saved into the variable you choose
// TODO: Create an array of questions for user input
function starterQuestion() {

   return  inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Employee database, What do You want to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add a role', 'add an employee', 'update an employee role']
        }
    ])
        .then(choices => {
         
            if (choices.option === 'view all departments') {
               
                viewAllDepartments();

            } else if (choices.option === 'view all roles') {

                viewAllRoles();

            } else if (choices.option === 'view all employees') {

                viewAllEmployees();

            } else if (choices.option === 'add department') {

                addDepartment();

            } else if (choices.option === 'add a role') {

                addRole();

            } else if (choices.option === 'add an employee') {

                addEmployee()

            } else if (choices.option === 'update an employee role')

                updateEmployeeRole();

        })
 }

// {
//     type: 'input',
//         name: 'departmentName',
//             message: 'What is the Department Name?'

// },
// {
//     type: 'input',
//         name: 'role',
//             message: 'What is the Role Name?'

// },
// {
//     type: 'input',
//         name: 'salary',
//             message: 'What is the Salary?'
// },
// {
//     type: 'input',
//         name: 'departmentRole',
//             message: 'What is the Department Role?'
// },

// {

//     type: 'input',
//         name: 'employeeName',
//             message: 'what is the Employees First Name?'
// },
// {
//     type: 'input',
//         name: 'employeeLastName',
//             message: 'what is the Employees Last Name?'
// },
// {
//     type: 'input',
//         name: 'employeeRole',
//             message: 'what is the Employee Role?'
// },
// {
//     type: 'input',
//         name: 'employeeManager',
//             message: 'what is the Employee Manager?'
// },

// {
//     type: 'input',
//         name: 'employeeNewRole',
//             message: 'what is this Employees New Role?'
// }])
    

function viewAllDepartments() {
    db.findAllDepartments().then(([rows]) => {
        console.table(rows)
        starterQuestion();
    })

}
function viewAllRoles() {

    db.findAllRoles().then(([rows]) => {
        console.table(rows)
        starterQuestion();
    })
}

function viewAllEmployees() {

    db.findAllEmployees().then(([rows]) => {
        console.table(rows)
        starterQuestion();
    })

}

function addDepartment() {
    inquirer.prompt([{

        type: 'input',
        name: 'departmentName',
        message: "what is department name"

    }]).then((response) => {
        console.log(response.departmentName);
        db.addDepartment(response.departmentName).then(([rows]) => {
            console.table(rows)
            starterQuestion();
        })
    })
}
const addRole = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        const departments = res.map((department) => ({ name: department.name, value: department.id }));
        inquirer.prompt([{
            name: "title",
            type: "input",
            message: "Please Type in a new Role Name",
        },
        {
            name: "salary",
            type: "input",
            message: "Please Type in a new Role Salary",
        },
        {
            name: "department",
            type: "list",
            message: "Which department would you like to add into?",
            choices: departments,
        },
        ]).then(res => {
            if (err) throw err;
            let newRole = res.title
            let newSalary = res.salary
            let newDept = res.department

             db.addRole(newRole, newSalary,newDept).then(([rows]) => {
                 console.table(rows)
                 starterQuestion();
             })
           
            
        })
    })
}
const addEmployee = () => {
    connection.query("SELECT employee.*, role.title AS role_name, manager.firstName AS manager_name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id", (err, res) => {
        if (err) throw err;
        const manager = res.map((manage => ({ name: manage.firstName + " " + manage.lastName, value: manage.id })))
connection.query("SELECT * FROM role",(err,res)=>{
    const employee = res.map((employee) => ({ name: employee.title, value: employee.id }));
        inquirer.prompt([{
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?",
        },
        {
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: employee
        }, {
            name: "manager",
            type: "list",
            message: "Who is the employee's manager?",
            choices: manager
        }
        ]).then(res => {
            if (err) throw err;
            let first = res.first_name;
            let last = res.last_name;
            let role = res.role;
            let nManager = res.manager;
            connection.query("INSERT INTO employee (firstName,lastName,role_id,manager_id) VALUES (?,?,?,?)", [first, last, role, nManager])
            if (err) throw err
            starterQuestion()
        });
    });
    });
};
const updateEmployeeRole = () => {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        const employees = res.map((employee => ({ name: employee.firstName + " " + employee.lastName, value: employee.id })))
        connection.query("SELECT * FROM role", (err, res) => {
            const roles = res.map((role => ({ name: role.title, value: role.id })));
            inquirer.prompt([
                {
                    name: "employee",
                    type: "list",
                    message: "Which employee do you want to update?",
                    choices: employees
                },
                {
                    name: "role",
                    type: "list",
                    message: "Which role do you want to assign to the selected employee?",
                    choices: roles
                }
            ]).then((res) => {
                const empid = res.employee;
                const updateRole = res.role;
                db.updateEmployee(updateRole,empid).then(([rows]) => {
                    console.table(rows);
                    starterQuestion();
                  });
            });
        });
    });
}
// Function call to initialize app
starterQuestion();


