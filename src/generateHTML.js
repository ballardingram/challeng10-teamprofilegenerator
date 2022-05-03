const fs = require('fs');

function generateHTML(data) {
    return `
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
<section class = "section is-large">
<div class = "columns is-multiline is-mobile">
    <div class = "card column is-one-quarter">
        <header class = "card-header">
            <p class = "card-header-title">
                Employee Name Here
            </p>
            <span class = "icon">
                <i class="fa-solid fa-user-plus"></i>
            </span>
        </header>   
    </div>
    <div class = "card column is-one-quarter">
        <header class = "card-header">
        <p class = "card-header-title">
            Manager Name Here
        </p>
        <div class = "card>
        <div class = "card-content">
        <div class = "content">
        <span class = "icon">
            <i class="fa-solid fa-user-tie"></i>
        </span>
    </header>
    </div>
    <div class = "card column is-one-quarter">
        <header class = "card-header">
            <p class = "card-header-title">
                Engineer Name Here
            </p>
            <span class = "icon">
                <i class="fa-solid fa-user-gear"></i> 
            </span>
        </header>
    </div>
    <div class = "card column is-one-quarter">
        <header class = "card-header">
            <p class = "card-header-title">
                Intern Name here
            </p>
            <span class = "icon">
                <i class="fa-solid fa-user-graduate"></i> 
            </span>
        </header>
    </div>
</div>
</section>

<!-- DOCUMENTATION > FOOTER LINK (https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/) USED FOR OPEN IN NEW TAB AND SECURITY CONCERNS -->
<footer class = "footer has-background-info has-text-white is-small">
    <div class = "content has-text-centered">
        <p>
            <em>This was built by Ballard Ingram for UT Full Stack Boot Camp Challenge #10!</em>
            <br><a href="https://github.com/ballardingram/challenge10-teamprofilegenerator" class = "has-text-white" target="_blank" rel="noopener noreferrer">Access the GitHub Repo by clicking here.</a>
        </p>
    </div>
</footer>

</body>

<!-- LINKS TO EXTERNAL FEATURES -->
<script src = "../index.js"></script>

</html>
    `
};

module.exports = generateHTML;