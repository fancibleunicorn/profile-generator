const inquirer = require('inquirer');
const Intern = require('../lib/Intern');
const getEmployee = require('./getEmployee');

const getIntern = () => {
    return inquirer.prompt([
        { 
            type: 'text',
            name: 'name',
            message: "What is this intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter intern's name!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'id',
            message: "What is this intern's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter intern's id!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'email',
            message: "What is this intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter intern's email!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'school',
            message: "What is this intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school!");
                    return false;
                }
            }
        },
        
    ])
}

module.exports = getIntern;