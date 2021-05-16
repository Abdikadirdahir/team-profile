const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

it("Can set office number via constructor argument", () => {
  const value = 100;
  const manager = new Manager("Frank", 1, "totallyRealEmail@gmail.com", value);
  expect(manager.officeNumber).toBe(value);
});

it("getRole() should return \"Manager\"", () => {
  const value = "Manager";
  const manager = new Manager("Frank", 1, "totallyRealEmail@gmail.com", 100);
  expect(manager.getRole()).toBe(value);
});

it("Can get office number via getOffice()", () => {
  const value = 100;
  const manager = new Manager("Frank", 1, "totallyRealEmail@gmail.com", value);
  expect(manager.getOfficeNumber()).toBe(value);
});
