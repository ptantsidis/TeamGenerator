const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require("./util/generateHTML")
const fs = require('fs');
const { magentaBright } = require("chalk");

const managerArray = []
const internArray = []
const engineerArray = []

var empQuestions = [{
    type: 'input',
    name: 'name',
    message: "Name?",
},
{
    type: 'number',
    name: 'id',
    message: "ID?",
},
{
    type: 'input',
    name: 'email',
    message: "Email?",
}]

async function addManager() {
    let userinput =  await inquirer.prompt(empQuestions)
    inquirer.prompt([{
        type: 'input',
        name: 'office',
        message: "Office Number?",
    }]).then(function (response) {
    let newManager = new Manager (userinput.name, userinput.id, userinput.email, response.office)
    managerArray.push(newManager);
       addOrStop()
    })
}

async function addEngineer() {
    let userinput =  await inquirer.prompt(empQuestions)
    inquirer.prompt([{
        type: 'input',
        name: 'github',
        message: "GitHub User?",
    }]).then(function (response) {
    let newEngineer = new Engineer (userinput.name, userinput.id, userinput.email, response.github)
    engineerArray.push(newEngineer);
    console.log(engineerArray);
        addOrStop()
    })
}

async function addIntern() {
    let userinput =  await inquirer.prompt(empQuestions)
    inquirer.prompt([{
        type: 'input',
        name: 'schoolName',
        message: "School Name?",
    }]).then(function (response) {
    let newIntern = new Intern (userinput.name, userinput.id, userinput.email, response.schoolName)
    internArray.push(newIntern);
        addOrStop()
    })
}
    function addOrStop() {
        inquirer.prompt([{
            type: 'rawlist',
            name: 'next',
            message: "Add Team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'No']
        }]).then(function (response) {
            switch (response.next) {
                case 'Manager':
                    addManager()
                    break;
                case 'Engineer':
                    addEngineer()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                case 'No':
                    printHTML()
                    break;
            }
        })
    }

    async function printHTML() {  
        let manHTMLcode = ""
        managerArray.forEach(response =>{
            manHTMLcode +=` 
            <div class="col-md-4">
                <div class="card">
                <img src="manager.png"/><h2>Manager</h2>
                    <h2>${response.name}</h2>
                    <div class ="email">Email: ${response.email}</div>
                    <div class ="office-number">Office Number: ${response.officeNumber}</div>
                </div>
            </div>`
        })     
        engineerArray.forEach(response =>{
            manHTMLcode += `
            <div class="col-md-4">
                <div class="card">
                <img src="engineer.png"/>
                <h2>Engineer</h2>
                    <h2>${response.name}</h2>
                    <div class ="email">Email: ${response.email}</div>
                    <div class ="github-user">GitHub User Name: ${response.github}</div>
                </div>
            </div>`
        })
        internArray.forEach(response =>{
            manHTMLcode += ` 
                <div class="col-md-4">Lo
                <div class="card">
                <img src="intern.png"/>
                <h2>Intern</h2>
                    <h2>${response.name}</h2>
                    <div class ="email">Email: ${response.email}</div>
                    <div class = "school-name">School Name: ${response.schoolName}</div>
                </div>
            </div>`
        })     
        let result = await generateHTML(manHTMLcode)
        fs.writeFileSync("./dist/index.html", result, function (err) {
        if (err) throw err;
     })
    console.log("Index HTML Completed")
    }       
    addOrStop() 