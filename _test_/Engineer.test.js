const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Bob', '123456789', 'bob@email.com', 'github.com/bobtest');

// TEST DETAIL > This will match the 'new Engineer' set up to the expected outcomes.
test('engineer objects >  test constructior values', () => {
    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('123456789');
    expect(engineer.email).toBe('bob@email.com');
    expect(engineer.github_username).toBe('github.com/bobtest');
});

// TEST DETAIL > This section will test the 'getObject' method.

test('name object > test if getName method works', () => {
    expect(engineer.getName()).toBe('Bob');
});

test('id object > test if getId method works', () => {
    expect(engineer.getId()).toBe('123456789');
});

test('email object > test if getEmail method works', () => {
    expect(engineer.getEmail()).toBe('bob@email.com');
});

test('github_username object > test if getGithub_username method works', () => {
    expect(engineer.getGithub_username()).toBe('github.com/bobtest');
});