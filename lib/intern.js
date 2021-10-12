const Employee = require('./employee');

class Intern extends Employee {
        constructor(name,id,email,schoolName){
                super(name, id, email)
                this.schoolName = schoolName;
        }
        getschoolName() {
                return this.schoolName;
        }
        getRole() {
                return "intern"
        }

}
module.exports = Intern;