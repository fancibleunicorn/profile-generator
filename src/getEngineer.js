const inquirer = require('inquirer');

const Engineer = require('../lib/Engineer');

const getEngineer = () => {
    return inquirer.prompt([
        { 
            type: 'text',
            name: 'name',
            message: "What is this engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's name!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'id',
            message: "What is this engineer's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's id!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'email',
            message: "What is this engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's email!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'github',
            message: "What is this engineer's github username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's github name!");
                    return false;
                }
            }
        }
        
    ])

}

module.exports = getEngineer;