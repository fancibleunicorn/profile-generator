const Intern = require('../lib/Intern');

test('creates an intern object from Employee.js', () => {
    const intern = new Intern ('Bob', 123, 'bob@test.com');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
})

test('adds school name to intern', () => {
    const intern = new Intern ('Bob', 123, 'bob@test.com', 'Bob University');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('changes role to Intern', () => {
    const intern = new Intern ('Bob', 123, 'bob@test.com', 'Bob University');

    expect(intern.role).toBe('Intern');
})