const { getMaxListeners } = require('process');
const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create name, email, id, role if valid argument', () => {
            const employee = new Employee('Bob', 1,  'email@gmail');
            expect(employee.getName()).toBe('Bob');
            expect(employee.getemail()).toBe('email@gmail');
            expect(employee.getId()).toBe(1);
            expect(employee.getRole()).toBe('Employee');
        });
        
        // it('should throw an error if no arguments', () => {
        //     const cb = () => new Employee.email();
        //     expect(cb).toThrow();
        // });
        //     it("should throw an error if 'id' is not a number", () => {
        //     const cb = () => new Employee.id();
        //     const err = new Error("Expected parameter 'Id' to be a non-negative number");
        //     expect(cb).toThrow(err);

        // });
        // it("should throw an error if 'name' is not a string", () => {
        //     const cb = () => new Employee(3, 2);
        //     const err = new Error("Expected 'name' to be a non-empty string");
        //     expect(cb).toThrow(err);
        //  });
        //  it("should throw an error if 'id' is less than 0", () => {
        //     const cb = () => new Employee("Bob", 'email@gmial.com', -1, 'Employee');
        //     const err = new Error("Expected 'age' to be a non-negative number");
        //     expect(cb).toThrow(err); 
        // });    
    });
  });
  


