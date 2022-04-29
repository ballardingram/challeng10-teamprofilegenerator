// EXTERNAL PACKAGES > INQUIRER INSTALLED
// DOCUMENTATION > NODE INQUIRER (https://github.com/SBoudrias/Inquirer.js)
const inquirer = require('inquirer');

// ROUTES > TO OTHER PAGES REQUIRED FOR PROMPTS TO FUNCTION
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

// CREATING AN EMPLOYEES ARRAY
let employees = [];

// CONST > PROMPTS FOR APPLICATION
const groupPrompts = () => {
    prompt ([
        {
            type: "input",
            name: "name",
            message: 'What is the employee name?',
        },
        {
            type: "input",
            name: "id",
            message: 'What is the employee ID number?',
        },
        {
            type: "input",
            name: "email",
            message: 'What is the employee email address?',
        },
    ]);
};

const engineerPrompts = () => {
    prompt ([
        {
            type: "input",
            name: "github_username",
            message: 'What is the github User Name?',
        },
    ]);
};

const managerPrompts = () => {
    prompt ([
        {
            type: "input",
            name: "officeNumber",
            message: 'What is the office number?',
        },
    ]);
};

const internPrompts = () => {
    prompt ([
        {
            type: "input",
            name: "school",
            message: 'What school did/are they attend/ing?',
        },
    ]);
};

// FUNCTION > INITIALIZE PROGRAM
function init() {
    inquirer.prompt(groupPrompts)
    .then(prompt(engineerPrompts) {
        console.log()
    })
}