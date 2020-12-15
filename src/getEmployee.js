const inquirer = require('inquirer');
const fs = require('fs');

const getManager = require('./getManager');
const getEngineer = require('./getEngineer');
const getIntern = require('./getIntern');
const writePage = require('./writePage');


const writeEngineer = require('./writeEngineer');
const writeIntern = require('./writeIntern');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const manager = []

const startApp = () => {
   
    getManager()
    .then(({ name , id , email , office }) => {
        this.manager = new Manager( name, id, email, office)
        manager.push(this.manager);
        fs.writeFile('team-profile.html', writePage(manager,), err => {
            if (err) throw err;})
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
        let engineer = [];
        let intern = [];

        if (role === "Engineer") {
            getEngineer()
            .then(({ name, id, email, github}) => {
                this.engineer = new Engineer( name, id, email, github)
                engineer.push(this.engineer);
                fs.appendFile('team-profile.html', writeEngineer(engineer), err => {
                    if (err) throw err;})
                getEmployee();
                
            })   

        } else if (role === "Intern") {
            getIntern()
            .then(({ name, id, email, school}) => {
                this.intern = new Intern( name, id, email, school)
                intern.push(this.intern);
                fs.appendFile('team-profile.html', writeIntern(intern), err => {
                    if (err) throw err;})
                getEmployee();
            })
            
        } else {
            fs.appendFile('team-profile.html', 
            `   </div>
            </section>
            
            </body>
            </html>`, err => {
                if (err) throw err;})
        console.log("all done! Check out your profile page team-profile-html")
        
        }
    })
    

    
}



//final code

`</div>
</section>

</body>
</html>`

module.exports = getEmployee;
module.exports = startApp;