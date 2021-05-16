/*GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```*/

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");
const render = require('../dist/src/HTMLrender');

const teamMembers = [];
const idArray = [];
function appMenu() {

  function createManager() {
    console.log("Please build your team");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        
      }
    ]).then(name => {
      const manager = new Manager(name.managerName, name.managerId, name.managerEmail, name.managerOfficeNumber);
      teamMembers.push(manager);
      idArray.push(name.managerId);
      createTeam();
    });
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
        
      }
    ]).then(name => {
      const engineer = new Engineer(name.engineerName, name.engineerId, name.engineerEmail, name.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(name.engineerId);
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
       
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
       
      }
    ]).then(name => {
      const intern = new Intern(name.internName, name.internId, name.internEmail, name.internSchool);
      teamMembers.push(intern);
      idArray.push(name.internId);
      createTeam();
    });
  }

function buildTeam() {
    
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}

appMenu();
