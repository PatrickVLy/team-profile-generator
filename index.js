const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMember =[];
function addTeamMember () {
    inquirer.prompt([
       
         {
            type: 'list',
            message: 'Would you like to add an Employee?',
            name: 'addEmployee',
            choices: ["YES", "NO"],
          },])
      .then ((response) => {
        var addEmployee = response.addEmployee;
        var html = ``;
        if (addEmployee==="YES"){addEmployee()
        };
        if (addEmployee==="NO"){console.log(goodbye)};
        
        fs.writeFile('index.html', html , (err) => 
        err ? console.error(err) : console.log('success')
        
        );
    
    
    })
    
}

function addEmployee (){
    inquirer.prompt([
       
        {
           type: 'list',
           message: 'What is the employee role?',
           name: 'role',
           choices: ["Manager", "Engineer", "Intern"],
         },])
     .then ((response) => {
       var role = response.role;
       var html = ``;
       if (role==="Manager"){getManager};
       if (role==="Engineer"){getEngineer};
       if (role==="Intern"){getIntern};
       
       fs.writeFile('index.html', html , (err) => 
       err ? console.error(err) : console.log('success')
       
       );
   
   
   })

}

