
const startApp = require('./getEmployee');
const getQuestions = () => {

console.clear()
console.log('Welcome to this Team Profile Generator!')
console.log("follow the prompts to fill out your team's information")

startApp()


}

module.exports = getQuestions;


