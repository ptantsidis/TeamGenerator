
class Employee  {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {

        return this.name;
    }
    getId(){
        return this.id;

    }

    getemail() {
        return this.email;
    }
    getRole() {
     return "employee"
 }}

// function Employee(fname) {
// if(typeof fname !== "string" || fname.trim().length) {    
//     throw new error("Expected parameter 'fname' to be empty string")
//     };

//     if(typeof empId  > 0)  {    
//         throw new error("Expected parameter 'EmpId' to be greather than zero")
//         };
    

//     if(typeof email !== "string" || email.trim().length) {    
//         throw new error("Expected parameter 'emial' to be empty string")
//         };
    
// this.fname = fname;
// this.email = email;
// this.empId = empId;
// }


module.exports = Employee;