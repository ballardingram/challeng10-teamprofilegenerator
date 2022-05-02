// EXTERNAL PACKAGES > INQUIRER INSTALLED, FS DOES NOT REQUIRE INSTALL
// DOCUMENTATION > INQUIRER (https://www.npmjs.com/package/inquirer)
// DOCUMENTATION > FS (https://nodejs.dev/learn/the-nodejs-fs-module)
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

// ROUTES > CONNECTION TO OTHER JS FILES
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
const generateHTML =require("./src/generateHTML");

// ROUTES > OUTPUT FILE
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team-dashboard.html");

// ARRAY > TEAM MEMBERS
const teamMembers = [];

const groupQuestions = [{
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employees name. Example: Bob')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter a new employee ID.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email address?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please provide an employee email.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employee office number?',
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log('Please provide an Office Phone Number.')
                    return false;
                }
            }
        }
    ];

// FUNCTION > INITIALIZE PROGRAM
function init() {
    inquirer.prompt(groupQuestions)
    .then(function(data) {
        fs.writeFile("team-dashboard.html", generateHTML(data));
        console.log(data)
    })
}

// FUNCTION > CALL TO INITIALIZE PROGRAM
init();