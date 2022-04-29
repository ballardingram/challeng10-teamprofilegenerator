const employee = require("../lib/Employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
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
}

module.exports = Manager;