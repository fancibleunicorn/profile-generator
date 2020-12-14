const getEmployee = require('./getEmployee');
const getManager = require('./getManager');
const getEngineer = require('./getEngineer');
const getIntern = require('./getIntern');
const startApp = require('./getEmployee');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');




const getQuestions = () => {

console.log('Welcome to this Team Profile Generator!')
console.log("follow the prompts to fill out your team's information")

startApp()

}

module.exports = getQuestions;


