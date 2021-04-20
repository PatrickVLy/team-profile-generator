const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMember =[];
const teamCards=[]
let starthtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">


    <title>Team Members</title>
</head>
<body>
    <div class="jumbotron">
        <h1 class="display-4">Team Members</h1>
      </div>
      <div class="row">`
let endhtml=`</div>
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
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
        if (addEmployee==="NO"){
            console.log(teamMember);
            const bodyhtml = teamCards.join('');
            fs.writeFile('index.html', starthtml+bodyhtml+endhtml, (err) => 
            err ? console.error(err) : console.log('success')
            
            );
        
        };
    
    
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
       var managerCard = `<div class="col-sm-4"><div class="card border-secondary mb-3" style="width: 18rem;">
       <div class="card-body">
         <h3 class="card-title">${managerName}</h3>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
  <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg><p class="card-text">Manager</p>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${managerID}</li>  
       <li class="list-group-item">Office Number: ${managerOfficeNumber}</li>
       </ul>
       <div class="card-body">
         Email: <a href="mailto: ${managerEmail}" class="card-link">${managerEmail}</a>
       </div>
     </div></div>`;
       var manager = new Manager(response.managername, response.managerid, response.manageremail, response.managerofficenumber)
       teamMember.push(manager);
       teamCards.push(managerCard);
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
       var engineerCard = `<div class="col-sm-4"><div class="card border-secondary mb-3" style="width: 18rem;">
       <div class="card-body">
         <h3 class="card-title">${engineerName}</h3>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
  <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
</svg><p class="card-text">Engineer</p>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${engineerID}</li> 
       </ul>
       <div class="card-body">
         Email: <a href="mailto: ${engineerEmail}" class="card-link">${engineerEmail}</a>
         Github: <a href="https://www.github.com/${github}" class="card-link">${github}</a>
       </div>
     </div></div>`;
       var engineer = new Engineer(engineerName, engineerID, engineerEmail, github)
       teamMember.push(engineer);
       teamCards.push(engineerCard);
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
       var internCard = `<div class="col-sm-4"><div class="card border-secondary mb-3" style="width: 18rem;">
       <div class="card-body">
         <h3 class="card-title">${internName}</h3>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-dizzy-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
</svg><p class="card-text">Intern</p>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${internID}</li> 
       <li class="list-group-item">School: ${school}</li> 
       </ul>
       <div class="card-body">
         Email: <a href="mailto: ${internEmail}" class="card-link">${internEmail}</a>
       </div>
     </div></div>`;
       var intern = new Intern(internName, internID, internEmail, school)
       teamMember.push(intern);
       teamCards.push(internCard);
       addTeamMember();
   })

}




addTeamMember();