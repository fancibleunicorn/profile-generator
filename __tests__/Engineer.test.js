const Engineer = require('../lib/Engineer');

test('creates an engineer object from Employee.js', () => {
    const engineer = new Engineer ('Bob', 123, 'bob@test.com');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
})

test('adds github name to engineer', () => {
    const engineer = new Engineer ('Bob', 123, 'bob@test.com', 'bobhub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('changes role to Engineer', () => {
    const engineer = new Engineer ('Bob', 123, 'bob@test.com', 'bobhub');

    expect(engineer.role).toBe('Engineer');
})