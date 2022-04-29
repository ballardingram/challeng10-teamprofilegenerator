const Employee = require('../lib/Employee');
const employee = new Employee('Bob', '123456789', 'bob@email.com');

// TEST DETAIL > This will match the 'new Employee' set up to the expected outcomes.
test('employee objects > test constructor values', () => {
    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('123456789');
    expect(employee.email).toBe('bob@email.com');
});

// TEST DETAIL > This section will test the 'getObject' method.

test('name object > test if getName method works', () => {
    expect(employee.getName()).toBe('Bob');
});

test('id object > test if getId method works', () => {
    expect(employee.getId()).toBe('123456789');
});

test('email object > test if getEmail method works', () => {
    expect(employee.getEmail()).toBe('bob@email.com');
});

test('role object > test if getRole method works', () => {
    expect(employee.getRole()).toBe('Employee');
});