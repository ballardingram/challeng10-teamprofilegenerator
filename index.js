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

// PROMPTS > EMPLOYEE QUESTIONS - ALL PROFILES START WITH THIS INFORMATION
// DOCUMENTATION > NODE INQUIRER - ANSWERS (https://www.npmjs.com/package/inquirer#answers)
// PROMPTS > ADD NEW EMPLOYEE BASED ON TYPE
// DOCUMENTATION > NPM INQUIRER 'RECURSIVE PROMPTS' (https://www.npmjs.com/package/inquirer-recursive)
// DOCUMENTATION > NPM INQUIRER 'LOOPING PROMPTS' (http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs)
// DOCUMENTATION > 'LOOPING PROMPTS' DIDN'T WORK WITH THE CODE I HAVE, NOT USING FOR NOW
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
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
            message: 'What is the Manager office number?',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                } else {
                    console.log('Please enter the Managers office number.')
                    return false;
                }
            }
        },
        {
            type: 'recursive',
            name: 'addEngineer',
            message: 'Are you adding an Engineer?',
            prompts: [
                {
                    type: 'input',
                    name: 'Github_username',
                    message: 'What is the Enginner GitHub User Name?',
                    validate: Github_username => {
                        if(Github_username) {
                            return true;
                        } else {
                            console.log('Github User Name is required. Example: github.com/bobtest')
                        }
                    }
                }
            ]
        },
        {
            type: 'recursive',
            name: 'addIntern',
            message: 'Are you adding an Intern?',
            prompts: [
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the name of the school the Intern is/did attend?',
                    validate: school => {
                        if(school) {
                            return true;
                        } else {
                            console.log('Please provide the name of the school.')
                        }
                    }
                }
            ]
        },
        {
            type: 'recursive',
            name: 'returnHome',
            message: 'Enter a new employee?'
        }
    ];


// FUNCTION > MIGRATE DATA FROM PROMPTS INTO NEW FILE
// NOTE > This function and the functions below were referenced from Challenge 9. My take was "if it works then use it again and modify it for this challenge."
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("COMPLETE! New Team Dashboard READY! View the FILE EXPLORER to find your file!")
        }
    })
}

// FUNCTION > INITIALIZE PROGRAM
function init() {
    inquirer.prompt(groupQuestions)
    .then(function(teamMembers) {
        writeFile("team-dashboard.html", generateHTML(teamMembers));
        console.log(teamMembers)
    })
}

// FUNCTION > CALL TO INITIALIZE PROGRAM
init();