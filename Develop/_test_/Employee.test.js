const Employee = require('../lib/Employee');
test('check that an employee is created', () => {
    let employee = new Employee ("name", "id", "name@email");
    expect(employee.getName()).toMatch("name");
});
