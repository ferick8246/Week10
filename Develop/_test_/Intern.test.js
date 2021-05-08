const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Rice";
  const e = new Intern("Pedro", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Pedro";
  const e = new Intern("Pedro", 1, "test@test.com", "Rice");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Pedro";
  const e = new Intern("Pedro", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});