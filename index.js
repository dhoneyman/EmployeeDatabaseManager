const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
let connection;

initializeConnection();

async function initializeConnection() {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "work_db",
  });
}

manageEmployees();

async function manageEmployees() {
  const data = await inquirer.prompt([
    {
      type: "list",
      message:
        "Please select what you would like to do from the following list of options.",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
      name: "firstAction",
    },
    {
      type: "input",
      message: "Please enter department name",
      name: "addDepartmentName",
      when: (data) => data.firstAction === "add a department",
    },
    {
      type: "input",
      message: "Please enter department ID",
      name: "addDepartmentId",
      when: (data) => data.firstAction === "add a department",
    },
    {
      type: "input",
      message: "Please enter role ID",
      name: "roleId",
      when: (data) => data.firstAction === "add a role",
    },
    {
      type: "input",
      message: "Please enter role title",
      name: "roleTitle",
      when: (data) => data.firstAction === "add a role",
    },
    {
      type: "input",
      message: "Please enter role salary",
      name: "roleSalary",
      when: (data) => data.firstAction === "add a role",
    },
    {
      type: "list",
      message: "Please enter coresponding department ID",
      name: "roleDeptId",
      choices: async () =>(await connection.execute("select id as value, name from departments;"))[0],
      // choices: async () => {
      //     const [data] =  await connection.execute("select id as value, name from departments;")
      //     console.log(data);
      //     return data;
      // },
      when: (data) => data.firstAction === "add a role",
    },
    {
      type: "input",
      message: "Please enter employees id.",
      name: "employeeId",
      when: (data) => data.firstAction === "add an employee",
    },
    {
      type: "input",
      message: "Please enter employees first name.",
      name: "employeeFirst",
      when: (data) => data.firstAction === "add an employee",
    },
    {
      type: "input",
      message: "Please enter employees last name.",
      name: "employeeLast",
      when: (data) => data.firstAction === "add an employee",
    },
    {
      type: "list",
      message: "Please select the employees role id",
      name: "employeeRole",
      choices: async () =>(await connection.execute("select id as id, id as value from roles"))[0],
      when: (data) => data.firstAction === "add an employee",
    },
    {
      type: "list",
      message: "Please select the employees manager",
      name: "employeeManager",
      choices: async () =>(await connection.execute("select id as id, id as value from employees"))[0],
      when: (data) => data.firstAction === "add an employee",
    },
    {
      type: "list",
      message: "Please select the employee you would like to update",
      name: "employeeUpdate",
      choices: async () =>(await connection.execute("select id as id, id as value from employees"))[0],
      when: (data) => data.firstAction === "update an employee role",
    },
    {
      type: "list",
      message: `Please select employees new role`,
      name: "employeeUpdateParam",
      choices: async () =>
        (await connection.execute("select id as value, id as value from roles;"))[0],
      when: (data) => data.firstAction === "update an employee role",
    },
  ]);

  if (data.firstAction === "view all departments") {
    viewDepartments();
  } else if (data.firstAction === "view all roles") {
    viewRoles();
  } else if (data.firstAction === "view all employees") {
    viewEmployees();
  } else if (data.firstAction === "add a department") {
    addDepartment(data);
  } else if (data.firstAction === "add a role") {
    addRole(data);
  } else if (data.firstAction === "add an employee") {
    addEmployee(data);
  } else if (data.firstAction === "update an employee role") {
    updateRole(data);
  }
}
async function viewDepartments() {
  // create the connection
  // query database
  const [rows, fields] = await connection.execute("select * from departments;");

  console.table(rows);
  manageEmployees();
}

async function viewRoles() {
  // create the connection
  // query database
  const [rows, fields] = await connection.execute("select * from roles;");

  console.table(rows);
  manageEmployees();
}

async function viewEmployees() {
  // create the connection
  // query database
  const [rows, fields] = await connection.execute("select * from employees;");

  console.table(rows);
  manageEmployees();
}

async function addDepartment(data) {
  // create the connection
  // query database
  let newDeptName = data.addDepartmentName;
  let newDeptNum = data.addDepartmentId;

  const [rows, fields] = await connection.execute(
    `INSERT INTO departments(id, name) VALUES (${newDeptNum}, '${newDeptName}');`
  );
  viewDepartments();
}

async function addRole(data) {
  // create the connection
  // query database
  let roleId = data.roleId;
  let roleTitle = data.roleTitle;
  let roleSalary = data.roleSalary;
  let roleDeptId = data.roleDeptId;

  const [rows, fields] = await connection.execute(
    `INSERT INTO roles(id, title, salary, department_id) VALUES (${roleId}, '${roleTitle}', ${roleSalary}, ${roleDeptId});`
  );
  viewRoles();
}
async function updateRole(data) {
  // create the connection
  // query database
  let employee = data.employeeUpdate;
  let newParam = data.employeeUpdateParam;
  console.log(newParam);

  const [rows, fields] = await connection.execute(
    `UPDATE employees SET role_id = ${newParam} WHERE id = ${employee};`
  );
  viewEmployees();
}

async function addEmployee(data) {
  // create the connection
  // query database
  let id = data.employeeId;
  let first = data.employeeFirst;
  let last = data.employeeLast;
  let role = data.employeeRole;
  let manager = data.employeeManager;

  const [rows, fields] = await connection.execute(
    `INSERT INTO employees(id, first_name, last_name, role_id, manager_id) VALUES (${id}, '${first}', '${last}', ${role}, ${manager});`
  );
  viewEmployees();
}


// SELECT first_name, last_name, id FROM employees WHERE id = ${employee} UPDATE role SET role = ${newParam} WHERE id = ${employee};
