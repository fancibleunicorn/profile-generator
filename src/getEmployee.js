const inquirer = require('inquirer');

const getEmployee = () => {
    return inquirer.prompt([
        { 
            type: 'list',
            name: 'role',
            message: "Add another team member?",
            choices: ['Engineer', 'Intern', 'finish building team']
        },
    ])
}

module.exports = getEmployee;