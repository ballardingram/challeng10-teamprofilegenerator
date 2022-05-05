// FUNCTIONS > BUILD TEAM
// NESTED FUNCTIONS > NEW ENGINNER AND NEW INTERN

const Engineer = require("../lib/Engineer")

// DOCUMENTATION > NESTED FUNCTIONS (https://www.educba.com/javascript-nested-functions/)
const buildTeam = (group) => {
    const addEngineer = (Engineer) => {
        return `
        <div class = "card is-warning ">
        <header class = "card-header">
            <p class = "card-header-title">
                ${Engineer.name}
            </p>
        </header>
        <div class = "card-content">
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fa-solid fa-user"></i>
                </span>
                <span><em>${Engineer.role}</strong></span>
            </span>
            <br>
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fas fa-info-circle"></i>
                </span>
                <span><strong>ID: </strong>${Engineer.id}</span>
            </span>
            <br>
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fa-solid fa-paper-plane"></i>
                </span>
                <span><strong>Email: </strong><a href = "mailto:${Engineer.email}">${Engineer.email}</a></span>
            </span>
            <br>
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fa-solid fa-phone"></i>
                </span>
                <span><strong>Office Phone: </strong>${Engineer.officeNumber}</span>
            </span>
        </div>
    </div>
        `
    }
}

module.exports = buildTeam;