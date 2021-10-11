

function Employee(fname) {
if(typeof Employee.fname !== "string" || Employee.fname.trim().length) {    
    throw new error("Expected parameter 'fname' to be empty string")
    };
}
function Employee() {
if(typeof Employee.empId  > 0)  {    
    throw new error("Expected parameter 'EmpId' to be greather than zero")
    };
}

function Employee() {
    if(typeof Employee.email !== "string" || Employee.email.trim().length) {    
        throw new error("Expected parameter 'emial' to be empty string")
        };
    }
this.fname = fname;
this.email = email;
this.empId = empId;

module.exports = Employee;