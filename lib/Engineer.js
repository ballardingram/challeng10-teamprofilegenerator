const employee = require("../lib/Employee");

// DOCUMENTATION > 1ST TEST REVEALED NEED FOR 'SUPER CONSTRUCTOR' USED (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) TO SOLVE
class Engineer extends employee {
    constructor(name, id, email, Github_username, role) {
        super(name, id, email);
        this.github_username = Github_username;
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
    getGithub_username () {
        return this.github_username
    }
    getRole() {
        return this.role
    }
}

module.exports = Engineer;