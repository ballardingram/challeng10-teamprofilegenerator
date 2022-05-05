// EXTERNAL PACKAGES > INQUIRER INSTALLED, FS DOES NOT REQUIRE INSTALL
// DOCUMENTATION > INQUIRER (https://www.npmjs.com/package/inquirer)
// DOCUMENTATION > FS (https://nodejs.dev/learn/the-nodejs-fs-module)
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateHTML =require("../src/generateHTML");

// ROUTES > CONNECTION TO OTHER JS FILES
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require("../lib/Intern");

const teamMembers = [];

const groupQuestions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('REQUIRED! Example: Bob')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('REQUIRED! Example: 123456789')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('REQUIRED! Example: bob@email.com')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Manager office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('REQUIRED! Example: 512-512-5112')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Add an employee by selecting an option below:',
            choices: ['Engineer', 'Intern']
        }
    ])

    if(answers.role === 'Engineer') {
        const addEngineer = await inquirer
        .prompt ([
            {
                type: 'input',
                name: 'github',
                message: 'What is the Engineer GitHub user name?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('REQUIRED! Example: bobtest')
                        return false;
                    }
                }
            },
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
            addEngineer.github
        );
        teamMembers.push(newEngineer);
    } else if (answers.role === 'Intern') {
        const addIntern = await inquirer
        .prompt ([
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of the School/Unversity for the Intern?',
                validate: schoolInput  => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('REQUIRED! Example: UT Austin')
                        return false;
                    }
                }
            },
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
            addIntern.school
        );
        teamMembers.push(newIntern)
    }
};

async function promptbaseMenu () {
    await groupQuestions ()

    const addTeamAnswers = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'repeat',
            message: 'Select an option below:',
            choices: ['Enter Another Employee', 'Build Team']
        }
    ])
    if (addTeamAnswers.repeat === 'Enter Another Employee') {
        return promptbaseMenu()
    }
    return buildTeam();
}

function buildTeam () {
    console.log('Your new team is ready. Review the information and access your new file in the OUTPUT folder.', teamMembers)
    fs.writeFileSync("../output/new-team-dashboard.html", generateHTML(teamMembers));
}

promptbaseMenu();