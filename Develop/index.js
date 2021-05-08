const inquirer = require("inquirer");
const fs = require("fs");



const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")
const generateHTML = require('./src/functions.js')



let finalTeamArray = [];


function startingPrompt() {
    inquirer.prompt([
        {message: "The Team Generator! Please write your team name://",
         name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            finalTeamArray.push(teamName)
            addManager();
        })

    
}

function addManager() {
    inquirer.prompt([
        {message: "What is your team manager's name?",
         name: "name"
        },
        {message: "What is your team manager's email address?",
         name: "email"
        },

        {type: "number",
         message: "What is your team manager's office number?",
         name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, officeNumber)
            finalTeamArray.push(teamMember)
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {type: "list",
         message: "Would you like to add more team members?",
         choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
         name: "addMemberData"
        }
    ]).
    then(function (data) {
        switch (data.addMemberData) {
        case "Yes, add an engineer":
            addEngineer();
            break;
            case "Yes, add an intern":
                addIntern();
            break;
            case "No, my team is complete":
                compileTeam();
            break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {message: "What is this engineer's name?",
         name: "name"
        },
        {message: "What is this engineer's email address?",
         name: "email"
        },
    ])
    .then(function (data) {
      const name = data.name
      const id = finalTeamArray.length + 1
      const email = data.email
      const teamMember = new Engineer(name, id, email,)
      finalTeamArray.push(teamMember)
      addTeamMembers()
    });

};

function addIntern() {
    inquirer.prompt([
        {message: "What is this intern's name?",
         name: "name"
        },
        {message: "What is this intern's email address?",
        name: "email"
        },
    ])
        .then(function (data) {
          const name = data.name
          const id = finalTeamArray.length + 1
          const email = data.email
          const teamMember = new Intern(name, id, email,)
          finalTeamArray.push(teamMember)
          addTeamMembers()
        });

};

function compileTeam() {
    console.log("All done great job")
}; 

    


startingPrompt()

