const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMember =[];
let html = ''

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

function addTeamMember () {
    inquirer.prompt([
       
         {
            type: 'list',
            message: 'Would you like to add a new Employee?',
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



function getManager(){
    inquirer.prompt([
       
        {
           type: 'input',
           message: 'What is the managers name?',
           name: 'managername',
         },
         {
            type: 'input',
            message: 'What is the managers ID?',
            name: 'managerid',
          },
          {
            type: 'input',
            message: 'What is the managers email',
            name: 'manageremail',
          },
          {
            type: 'input',
            message: 'What is the managers office number',
            name: 'managerofficenumber',
          },
        ])
     .then ((response) => {
       var managerName = response.managername;
       var managerID = response.managerid;
       var managerEmail = response.email;
       var managerOfficeNumber = response.managerofficenumber;
       var managerCard = `<div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${managerName}</h5>
         <p class="card-text">Manager</p>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">Office Number: ${managerID}</li>  
       <li class="list-group-item">Office Number: ${managerOfficeNumber}</li>
       </ul>
       <div class="card-body">
         Email: <a href="mailto: ${managerEmail}" class="card-link">${managerEmail}</a>
       </div>
     </div>`;
       var manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber)
       teamMember.push(manager);
       addTeamMember();
   })

}

function getEngineer(){
    inquirer.prompt([
       
        {
           type: 'input',
           message: 'What is the engineers name?',
           name: 'managername',
         },
         {
            type: 'input',
            message: 'What is the engineers ID?',
            name: 'managerid',
          },
          {
            type: 'input',
            message: 'What is the managers email',
            name: 'manageremail',
          },
          {
            type: 'input',
            message: 'What is the engineers github username',
            name: 'github',
          },
        ])
     .then ((response) => {
       var engineerName = response.engineername;
       var engineerID = response.engineerid;
       var engineerEmail = response.engineeremail;
       var github = response.github;
       var engineerCard = `<div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${engineerName}</h5>
         <p class="card-text">Manager</p>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${engineerID}</li> 
       </ul>
       <div class="card-body">
         Email: <a href="mailto: ${engineerEmail}" class="card-link">${engineerEmail}</a>
         Email: <a href="https://www.github.com/${github}" class="card-link">${engineerEmail}</a>
       </div>
     </div>`;
       var engineer = new Engineer(engineerName, engineerID, engineerEmail, github)
       teamMember.push(engineer);
       addTeamMember();
   })

}

addEmployee();