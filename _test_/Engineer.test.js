const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Bob', '123456789', 'bob@email.com', 'github.com/bobtest');

// TEST DETAIL > This will match the 'new Engineer' set up to the expected outcomes.
test('engineer objects >  test constructior values', () => {
    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('123456789');
    expect(engineer.email).toBe('bob@email.com');
    expect(engineer.github_username).toBe('github.com/bobtest');
});