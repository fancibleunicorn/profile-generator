const inquirer = require('inquirer');
const fs = require('fs');

const getManager = require('./getManager');
const getEngineer = require('./getEngineer');
const getIntern = require('./getIntern');
const getQuestions = require('./getQuestions');
const writePage = require('./writePage');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const manager = []
const engineers = []
const interns = []
const employees = []


const startApp = () => {

    
    getManager()
    .then(({ name , id , email , office }) => {
        this.manager = new Manager( name, id, email, office)
        manager.push(this.manager);
        console.log(manager);
        getEmployee()
    })
}

const getEmployee = () => {


    return inquirer.prompt([
        { 
            type: 'list',
            name: 'role',
            message: "Add another team member?",
            choices: ['Engineer', 'Intern', 'finish building team']
        },
    ]).then(({ role }) => {
        if (role === "Engineer") {
            getEngineer().then(({ name, id, email, github}) => {
                this.engineer = new Engineer( name, id, email, github);
                engineers.push(this.engineer)
                console.log(engineers)
                getEmployee();
                
            })
            
            
        } else if (role === "Intern") {
            getIntern().then(({ name, id, email, school}) => {
                this.intern = new Intern( name, id, email, school);
                interns.push(this.intern);
                console.log(interns);
                getEmployee();
            })
            
        } else {
        employees.push(manager);
        employees.push(engineers);
        employees.push(interns);
        console.log(employees);
        console.log("all done! Check out your profile page in the dist folder")
        
        fs.writeFile('team-profile.html', writePage(manager, engineers, interns, employees), err => {
              if (err) throw err;});
        }
    })
}

module.exports = getEmployee;
module.exports = startApp;