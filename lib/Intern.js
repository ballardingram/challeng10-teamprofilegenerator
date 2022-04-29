const employee = require('../lib/Employee');

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
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
    getSchool() {
        return this.school
    }
    getRole () {
        return this.role
    }
}

module.exports = Intern;