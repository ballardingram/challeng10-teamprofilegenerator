const employee = require("../lib/Employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getofficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return this.role("Manager")
    }
}

module.exports = Manager;