const inquirer = require("inquirer");
const Employee = require('./Employee');
const generateHTML = require("./util/generateHTML")
const fs = require('fs');


const questions = [{

    type: 'input',
    name: 'fname',
    message: "Name?",
},
{
    type: 'number',
    name: 'empId',
    message: "ID?",
},
{
    type: 'input',
    name: 'email',
    message: "Email?",
    

},
{
    type: 'rawlist',
    name: 'role',
    message: "Role?",
    choices: ['Employee', 'Manager', 'Engineer', 'Intern']
}]

inquirer.prompt(questions).then(async function (response) {
    let result = await generateHTML(response)
    fs.writeFileSync("./dist/index.html", result, function (err) {
        if (err) throw err;
    })
    console.log("Index HTML Completed")
});