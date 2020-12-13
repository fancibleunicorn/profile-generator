const inquirer = require('inquirer');

const getManager = () => {
    
    return inquirer.prompt([
        { 
            type: 'text',
            name: 'name',
            message: "What is this team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'id',
            message: "What is this team manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's id!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'email',
            message: "What is this team manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter manager's email!");
                    return false;
                }
            }
        },
        { 
            type: 'text',
            name: 'office',
            message: "What is this team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office!");
                    return false;
                }
            }
        },
        
    ])
}

module.exports = getManager;