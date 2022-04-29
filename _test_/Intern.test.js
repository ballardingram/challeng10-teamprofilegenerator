const Intern = require("../lib/Intern");
const intern = new Intern('Bob', '123456789', 'bob@email.com', 'Test University');

// TEST DETAIL > This will match the 'new Intern' set up to the expected outcomes.
test('intern objects > test constructor values', () => {
    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe('123456789');
    expect(intern.email).toBe('bob@email.com');
    expect(intern.school).toBe('Test University');
});

// TEST DETAIL > This section will test the 'getObject' method.
test('name object > test if getName method works', () => {
    expect(intern.getName()).toBe('Bob');
});

test('id object > test if getId method works', () => {
    expect(intern.getId()).toBe('123456789');
});

test('email object > test if getEmail method works', () => {
    expect(intern.getEmail()).toBe('bob@email.com');
});

test('school object > test if getSchool method works', () => {
    expect(intern.getSchool()).toBe('Test University');
});
