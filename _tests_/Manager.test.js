// const Employee = require('../employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create name, email, id, role and number if valid argument', () => {
            const manager = new Manager('Bob', 1,'email@gmail', '1234567890');
            expect(manager.name).toBe('Bob');
            expect(manager.email).toBe('email@gmail');
            expect(manager.id).toBe(1);
            expect(manager.getRole()).toBe('Manager');
            expect(manager.getofficeNumber()).toBe('1234567890')
        });
    });
});