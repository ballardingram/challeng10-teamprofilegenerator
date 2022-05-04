const inquirer = require("inquirer");

const newEmployee = [{
    type: 'input',
    name: 'name',
    message: 'What is the employee name?'
},
{
    type: 'input',
    name: 'id',
    message: 'What is the employee ID number?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is the employee email address?'
}];

function init() {
    inquirer.prompt(newEmployee)
}

init();