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
const groupQuestions = async (options = []) =>{

// PROMPTS > EMPLOYEE QUESTIONS - ALL PROFILES START WITH THIS INFORMATION
// DOCUMENTATION > NODE INQUIRER - ANSWERS (https://www.npmjs.com/package/inquirer#answers)
// PROMPTS > ADD NEW EMPLOYEE BASED ON TYPE
// DOCUMENTATION > NPM INQUIRER 'RECURSIVE PROMPTS' (https://www.npmjs.com/package/inquirer-recursive)
// DOCUMENTATION > NPM INQUIRER 'LOOPING PROMPTS' (http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs)
// DOCUMENTATION > 'LOOPING PROMPTS' DIDN'T WORK WITH THE CODE I HAVE, NOT USING FOR NOW
// NOTE > PER TUTOR, REMOVE THIS inquirer.registerPrompt('recursive', require('inquirer-recursive'));
// DOCUMENTATION > NPM WHEN (https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/when.js)
const addEmployee = [{
    type: 'input',
    name: 'name',
    message: 'What is the employee name?',
    default: 'Example: Bob'
},
{
    type: 'input',
    name: 'id',
    message: 'What is the employee ID number?',
    default: 'Example: 123456789'
},
{
    type: 'input',
    name: 'email',
    message: 'What is the employee email?',
    default: 'Example: bob@email.com'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is the Manager office number?',
    default: 'Example: 512-512-5112'
},
{
    type: 'list',
    name: 'role',
    message: 'Add an employee by selecting an option below:',
    choices: ['Engineer', 'Intern']
},
{
    type:'input',
    name: 'github',
    message: 'What is the Engineer GitHub user name?',
    when(answers) {
        return answers.role === 'Engineer'
    }
},
{
    type: 'input',
    name: 'school',
    message: 'What is the name of the School/University for the Intern?',
    when(answers) {
        return answers.role === 'Intern'
    }
},
{
    type: 'confirm',
    name: 'repeat',
    message: 'Enter another employee?',
    default: true
}
];

const { repeat, ...answers } = await inquirer.prompt(addEmployee);
const newEmployee = [...options, answers];
return repeat ? groupQuestions(newEmployee) : newEmployee;
};


// FUNCTION > MIGRATE DATA FROM PROMPTS INTO NEW FILE
// NOTE > This function and the functions below were referenced from Challenge 9. My take was "if it works then use it again and modify it for this challenge."
function writeFile(fileName, groupQuestions) {
    fs.writeFile(fileName, groupQuestions, function(err) {
        console.log(fileName)
        if (err) {
            return console.log(err)
        } else {
            console.log("COMPLETE! New Team Dashboard READY! View the FILE EXPLORER to find your file!")
        }
    })
}

// FUNCTION > INITIALIZE PROGRAM
const init = async () => {
    const options = await groupQuestions()
    return createTeam();
};

init();

function createTeam () {
    console.log(options)
    fs.writeFileSync("./output/new-team-dashboard.html", generateHTML(groupQuestions));
}