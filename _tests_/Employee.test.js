const Employee = require('../employee');

describe('Employee', () => {
    describe('fname', () => {
        it('should throw an error if no valid argument', () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        })
    }) 
});
describe('Employee', () => {
    describe('email', () => {
        it('should throw an error if no valid argument', () => {
            const cb = () => new Employee.email();
            expect(cb).toThrow();
        })
    }) 
});

describe('Employee', () => {
    describe('empId', () => {
        it("should throw an error if 'id' is not a number", () => {
        const cb = () => new Employee.empId();
        const err = new Error("Expected parameter 'empId' to be a non-negative number");
        expect(cb).toThrowError(err);
        })
    })
});
