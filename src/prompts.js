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
const generateHTML =require("./src/generateHTML.js");

// ROUTES > OUTPUT FILE
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team-dashboard.html");

// ARRAY > TEAM MEMBERS
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt [
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employee office number?',
        }
    ]
};