// const Employee = require('../employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create name, email, id, role, gitHub Username if valid argument', () => {
            const engineer = new Engineer('Bob',1, 'email@gmail', 'github.com');
            expect(engineer.name).toBe('Bob');
            expect(engineer.email).toBe('email@gmail');
            expect(engineer.id).toBe(1);
            expect(engineer.getRole()).toBe('Engineer');
            expect(engineer.getgitHub()).toBe("github.com")
        });
    });
});