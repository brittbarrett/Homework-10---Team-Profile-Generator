// DEPENDANCIES
const Employee = require("./Employee");

// MANAGER SUBCLASS OF EMPLOYEE
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
