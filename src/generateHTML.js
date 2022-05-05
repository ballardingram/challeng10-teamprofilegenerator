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
        `;
    };

    const addIntern = (Intern) => {
        return `
        <div class = "card is-warning ">
        <header class = "card-header">
            <p class = "card-header-title">
                ${Intern.name}
            </p>
        </header>
        <div class = "card-content">
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fa-solid fa-user"></i>
                </span>
                <span><em>${Intern.role}</strong></span>
            </span>
            <br>
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fas fa-info-circle"></i>
                </span>
                <span><strong>ID: </strong>${Intern.id}</span>
            </span>
            <br>
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fa-solid fa-paper-plane"></i>
                </span>
                <span><strong>Email: </strong><a href = "mailto:${Intern.email}">${Intern.email}</a></span>
            </span>
            <br>
            <span class = "icon-text">
                <span class = "icon">
                    <i class = "fa-solid fa-phone"></i>
                </span>
                <span><strong>Office Phone: </strong>${Intern.officeNumber}</span>
            </span>
        </div>
    </div>
        `
    }
    const site = [];

site.push(
    group
    .filter((employee) => employee.getRole() === 'Engineer')
    .map((Engineer) => addEngineer(Engineer))
    .join("")
);

site.push(
    group
    .filter((employee) => employee.getRole() === 'Intern')
    .map((Intern) => addEngineer(Intern))
    .join("")
);

return site.join("");
};


module.exports = (group) => {
    return`
    <!DOCTYPE html>
<html lang ="en">
<head>
    <!-- REQUIRED META TAGS -->
    <!-- DOCUMENTATION > BULMA FRAMEWORK META TAGS ARE REQUIRED THIS WAY FOR FUNCTIONALITY -->
    <meta charset = "UTF-8"/>
    <meta http-equiv="viewport" content="width=device-width, initial-scale=1"/>
    <title> Team Dashboard</title>
    <!-- LINKS TO EXTERNAL FEATURES -->
    <!-- DOCUMENTATION > FONTAWESOME (https://fontawesome.com/kits/a31af345b8/use) MY KIT ASSOCIATED WITH MY ACCOUNT -->
    <!-- DOCUMENTATION > BULMA FRAMEWORK FOR CSS LINK (https://bulma.io/documentation/overview/start/) -->
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a31af345b8.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
</head>
<body>
<!-- DOCUMENTATION > BULMA FRAMEWORK (https://bulma.io/documentation/overview/start/) USED STARTER CODE AS A REFERENCE -->
<!-- DOCUMENTATION > BULMA FRAMEWORK (https://bulma.io/documentation/columns/sizes/) -->
<!-- DOCUMENTATION > BULMA FRAMEWORK (https://bulma.io/documentation/overview/colors/ -->
<header class = "page-banner has-background-link has-text-centered">
    <div class = "column is-half is-offset-one-quarter">
    <h1 class = "title is-1 has-text-white">Employee Dashboard</h1>
    </div>
</header>
<!-- DOCUMENTATION > BULMA FRAMEWORK SECTIONS (https://bulma.io/documentation/layout/section/) -->
<!-- DOCUMENTATION > BULMA FRAMEWORK CARDS (https://bulma.io/documentation/components/card/) -->
<!-- DOCUMENTATION > MAILTO FUNCTION FOR EMAIL (https://www.w3docs.com/snippets/html/how-to-create-mailto-links.html) -->
<section class = "section is-medium">
    <div class = "columns is-multiliune is-mobile">
    ${buildTeam(group)}
    `
};