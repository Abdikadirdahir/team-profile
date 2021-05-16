const Employee = require('../lib/Employee.js')

describe("find employee type", () => {
    it("should find that employee is an object", () => {
        expect(typeof (new Employee("mark"))).toBe("object");
    });
})

describe("find employee id", () => {
    it("should find that employee has an id", () => {
        const frank = new Employee(1, "frank", "totallyRealEmail@gmail.com")
        expect(frank.id).toBe(1);
    });
})

describe("find employee name", () => {
    it("should find that employee has an name", () => {
        const frank = new Employee(1, "frank", "totallyRealEmail@gmail.com")
        expect(frank.name).toBe("frank");
    });
})

describe("find employee email", () => {
    it("should find that employee has an email", () => {
        const frank = new Employee(1, "frank", "totallyRealEmail@gmail.com")
        expect(frank.email).toBe("totallyRealEmail@gmail.com");
    });
})

describe("get employee id", () => {
    it("should find that employee has an id", () => {
        const frank = new Employee(1, "frank", "totallyRealEmail@gmail.com")
        expect(frank.getId()).toBe(1);
    });
})

describe("get employee name", () => {
    it("should find that employee has an name", () => {
        const frank = new Employee(1, "frank", "totallyRealEmail@gmail.com")
        expect(frank.getName()).toBe("frank");
    });
})

describe("get employee email", () => {
    it("should find that employee has an email", () => {
        const frank = new Employee(1, "frank", "totallyRealEmail@gmail.com")
        expect(frank.getEmail()).toBe("totallyRealEmail@gmail.com");
    });
})
describe("get employee role", () => {
    it("what is the employee role", () => {
        const frank = new Employee(1, "frank", "totallyRealEmail@gmail.com")
        expect(frank.getRole()).toBe("employee");
    });
})