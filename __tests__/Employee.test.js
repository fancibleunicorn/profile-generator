const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee ('Bob', 123, 'bob@test.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
})

test("returns employee's name", () => {
    const employee = new Employee ('Bob', 123, 'bob@test.com');

    expect(employee.getName()).toBe('Bob');
})

test("returns employee's id", () => {
    const employee = new Employee ('Bob', 123, 'bob@test.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test("returns employee's email", () => {
    const employee = new Employee ('Bob', 123, 'bob@test.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test("returns employee's role", () => {
    const employee = new Employee ('Bob', 123, 'bob@test.com');

    expect(employee.getRole()).toBe('Employee');
})
