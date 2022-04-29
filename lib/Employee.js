// DOCUMENATION > NODE CLASSES (https://www.geeksforgeeks.org/how-to-use-class-in-node-js/)
const employee = require("../lib/Employee");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
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

    getRole() {
        return this.role
    }

}

module.exports = Employee;