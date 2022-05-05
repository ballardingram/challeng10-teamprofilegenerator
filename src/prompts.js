const inquirer = require("inquirer");

const groupQuestions = async (options = []) => {
    const addEmployee = [
        {
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

const main = async () => {
    const options = await groupQuestions();
    console.log(options)
};

main();