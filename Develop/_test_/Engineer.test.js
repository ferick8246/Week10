const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Erick", 1, "test@test.com",);
  expect(e.getRole()).toBe(testValue);
});

