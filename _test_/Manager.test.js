const Manager = require("../lib/Manager");
const manager = new Manager('Bob', '123456789', 'bob@email.com', '512-512-5112');

// TEST DETAIL > This will match the 'new Manager' set up to the expected outcomes.

test('manager objects > test constructor values', () => {
    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe('123456789');
    expect(manager.email).toBe('bob@email.com');
    expect(manager.officeNumber).toBe('512-512-5112');
});