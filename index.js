const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMember =[];
let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>Team Members</title>
</head>
<body>
    <div class="jumbotron">
        <h1 class="display-4">Team Members</h1>
      </div>
literals go here
</body>
</html>`



function addTeamMember () {
    inquirer.prompt([
       
         {
            type: 'list',
            message: 'Would you like to add a new Employee?',
            name: 'addemployee',
            choices: ["YES", "NO"],
          },])
      .then ((response) => {
        var addEmployee = response.addemployee;
        if (addEmployee==="YES"){inquirer.prompt([
       
            {
               type: 'list',
               message: 'What is the employee role?',
               name: 'role',
               choices: ["Manager", "Engineer", "Intern"],
             },])
         .then ((response) => {
           var role = response.role;
           if (role==="Manager"){getManager()};
           if (role==="Engineer"){getEngineer()};
           if (role==="Intern"){getIntern()};
       
       
       })
    };
        if (addEmployee==="NO"){console.log(teamMember)};
    
    
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
       var managerEmail = response.manageremail;
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
       var manager = new Manager(response.managername, response.managerid, response.manageremail, response.managerofficenumber)
       teamMember.push(manager);
       addTeamMember();
   })

}

function getEngineer(){
    inquirer.prompt([
       
        {
           type: 'input',
           message: 'What is the engineers name?',
           name: 'engineername',
         },
         {
            type: 'input',
            message: 'What is the engineers ID?',
            name: 'engineerid',
          },
          {
            type: 'input',
            message: 'What is the engineers email',
            name: 'engineeremail',
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
         <p class="card-text">Engineer</p>
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

function getIntern(){
    inquirer.prompt([
       
        {
           type: 'input',
           message: 'What is the interns name?',
           name: 'internname',
         },
         {
            type: 'input',
            message: 'What is the interns ID?',
            name: 'internid',
          },
          {
            type: 'input',
            message: 'What is the interns email',
            name: 'internemail',
          },
          {
            type: 'input',
            message: 'What is the interns school',
            name: 'school',
          },
        ])
     .then ((response) => {
       var internName = response.internname;
       var internID = response.internid;
       var internEmail = response.internemail;
       var school = response.school;
       var engineerCard = `<div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${internName}</h5>
         <p class="card-text">Intern</p>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${internID}</li> 
       <li class="list-group-item">School: ${school}</li> 
       </ul>
       <div class="card-body">
         Email: <a href="mailto: ${internEmail}" class="card-link">${internEmail}</a>
       </div>
     </div>`;
       var intern = new Intern(internName, internID, internEmail, school)
       teamMember.push(intern);
       addTeamMember();
   })

}




addTeamMember();