const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require("./util/generateHTML")
const fs = require('fs');

const finalTeam = []
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


function toStart() {
    const questions = [{

        type: 'rawlist',
        name: 'role',
        message: "What type of Team memeber would you like to add?",
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
    }]


    inquirer.prompt(questions).then(async function (response) {
        //loop through the questions before getting into the final part
        //using a function to call the question whenever you need to
        //have array o f employees to send to generateHTML
        //in generateHTML create a for loop to add the new employees to the cards
        finalTeam.push(response)
        console.log(finalTeam)
        addOrStop()

    });
}
async function addManager() {
    let userinput =  await inquirer.prompt(empQuestions)
    inquirer.prompt([{
        type: 'input',
        name: 'office',
        message: "Office Number?",
    }]).then(function (response) {
    //    console.log(response,userinput)
    let newManager = new Manager (userinput.name, userinput.id, userinput.email, response.office)
    managerArray.push(newManager);
        addOrStop()

    })
}


async function addEngineer() {
    let userinput =  await inquirer.prompt(empQuestions)
    inquirer.prompt([{
        type: 'input',
        name: 'gitHub',
        message: "GitHub User?",
    }]).then(function (response) {
    //    console.log(response,userinput)
    let newEngineer = new Engineer (userinput.name, userinput.id, userinput.email, response.gitHub)
    engineerArray.push(newEngineer);
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
    //    console.log(response,userinput)
    let newIntern = new Intern (userinput.name, userinput.id, userinput.email, response.schoolName)
    internArray.push(newIntern);
        addOrStop()

    })
}
    function addOrStop() {
        inquirer.prompt([{
            type: 'rawlist',
            name: 'next',
            message: "Add another Team memeber?",
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
        //change response inside generateHTML for finalTeam array
        console.log(finalTeam)
        // let result = await generateHTML(finalTeam)
        // fs.writeFileSync("./dist/index.html", result, function (err) {
        //     if (err) throw err;
        // })
        console.log(managerArray);
        console.log(internArray);
        console.log(engineerArray);
        console.log("Index HTML Completed")
    }       

    addOrStop() 