const Intern = require("../lib/Intern");

it("Can set school using constructor", () => {
  const value = "UCLA";
  const intern = new Intern("Frank", 1, "totallyRealEmail@gmail.com", value);
  expect(intern.school).toBe(value);
});

it("getRole() should return \"Intern\"", () => {
  const value = "Intern";
  const intern = new Intern("Frank", 1, "totallyRealEmail@gmail.com", "UCLA");
  expect(intern.getRole()).toBe(value);
});

it("Can get school via getSchool()", () => {
  const value = "UCLA";
  const intern = new Intern("frank", 1, "totallyRealEmail@gmail.com", value);
  expect(intern.getSchool()).toBe(value);
});
