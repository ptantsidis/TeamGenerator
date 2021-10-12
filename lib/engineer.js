const Employee = require('./employee');

class Engineer extends Employee {
        constructor(name,id,email,github){
                super(name, id, email)
                this.github = github;
        }
        getgitHub() {
                return this.github;
        }
        getRole() {
                return "engineer"
        }

}
module.exports = Engineer;