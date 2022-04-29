// EXTERNAL PACKAGES > INQUIRER INSTALLED; FS AND PATH DO NOT REQUIRE INSTALL
// DOCUMENTATION > NODE INQUIRER (https://github.com/SBoudrias/Inquirer.js)
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
//const index = require('../dist/index');


// ROUTES > TO OTHER PAGES REQUIRED FOR PROMPTS TO FUNCTION
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

// CREATING AN EMPLOYEES ARRAY
const employees = [];

// PROMPTS > MANAGER
const promptManager = () => {
    return inquirer.prompt ([
        {
           type: "input" ,
           name: "name",
           message: "What is the employee's name?",
        },
        {
            type: "input",
            name: "id",
            mesage: "What is the employee ID number? MAX 9 Numbers!",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the employee's office number?",
        },
    ])
};

// FUNCTION > INITIALIZE PROGRAM
function init() {
    inquirer.prompt(promptManager)
    .then(function(data) {
        fs.writeFile("Employee-Dashboard.html", index(data));
        console.log(data)
    })
}

// FUNCTION > CALL TO INITIALIZE PROGRAM
init();