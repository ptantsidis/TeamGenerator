// const Employee = require('../employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create name, email, id, role and school name if valid argument', () => {
            const intern = new Intern('Bob',1, 'email@gmail','schoolName');
            expect(intern.name).toBe('Bob');
            expect(intern.email).toBe('email@gmail');
            expect(intern.id).toBe(1);
            expect(intern.getRole()).toBe('Intern');
            expect(intern.getschoolName()).toBe('schoolName')
        });
    });
});