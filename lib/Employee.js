// DOCUMENATION > NODE CLASSES (https://www.geeksforgeeks.org/how-to-use-class-in-node-js/)
const employee = require("../lib/Employee");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
}

module.exports = Employee;