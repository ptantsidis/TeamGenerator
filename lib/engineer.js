const Employee = require('./employee');

class Engineer extends Employee {
        constructor(name,id,email,github){
                console.log("Cont",github)
                super(name, id, email)
                this.github = github;
        }
        getgitHub() {
                return this.github;
        }
        getRole() {
                return "Engineer"
        }

}
module.exports = Engineer;