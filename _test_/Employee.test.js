// DOCUMENATION > NODE CLASSES (https://www.geeksforgeeks.org/how-to-use-class-in-node-js/)
const employee = require("../lib/Employee");

employee = class {
    constructor(name=null, id=null, email=null) {
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