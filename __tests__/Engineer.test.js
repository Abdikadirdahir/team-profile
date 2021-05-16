
const Engineer = require("../lib/Engineer");

it("Can set GitHUb account via constructor", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("Frank", 1, "totallyRealEmail@gmail.com", value);
  expect(engineer.github).toBe(value);
});

it("getRole() should return \"Engineer\"", () => {
  const value = "Engineer";
  const engineer = new Engineer("Frank", 1, "totallyRealEmail@gmail.com", "GitHubUser");
  expect(engineer.getRole()).toBe(value);
});

it("Can get GitHub username via getGithub()", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("Frank", 1, "totallyRealEmail@gmail.com", value);
  expect(engineer.getGithub()).toBe(value);
});
