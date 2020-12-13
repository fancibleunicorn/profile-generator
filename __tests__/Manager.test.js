const Manager = require('../lib/Manager');

test('creates a manager object from Employee.js', () => {
    const manager = new Manager ('Bob', 123, 'bob@test.com');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
})

test('adds office number to manager', () => {
    const manager = new Manager ('Bob', 123, 'bob@test.com', 456);

    expect(manager.getOffice()).toEqual(expect.any(Number));
})

test('changes role to Manager', () => {
    const manager = new Manager ('Bob', 123, 'bob@test.com', 456);

    expect(manager.role).toBe('Manager');
})