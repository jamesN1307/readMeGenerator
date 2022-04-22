// 1)need to install inquirer and fs 
// 2)a template ReadMe
// 3)prompt --- what do you want to include in your ReadMe
    // title, description, how to install, usage, test, license, contributor,github and email



const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input', 
        name:"title", 
        message: 'what is the title of your project?', 
    },
    {
        type: 'input', 
        name:"description", 
        message: 'please write a brief description of your project', 
    },
    {
        type: 'input', 
        name:"installation", 
        message: 'please enter your installation note for user here',  
    },
    {
        type: 'input', 
        name:"usage", 
        message: 'wwhat is the usage of your project?', 
    },
    {
        type: 'input', 
        name:"test", 
        message: 'Enter your test instructions for your project', 
    },
    {
        type: 'input', 
        name:"collaborator ", 
        message: 'Please list the collaborators and contribution notes', 
    },
    {
        type: 'rawlist', 
        name:"license", 
        message: 'Choose the appropriate license for your project', 
        choices:[
            'MIT License (MIT)', 
            'Mozilla Public License 2.0 (mpl-2.0)',
            'Open Software License 3.0 (osl-3.0',
            'Do What The F*ck You Want To Public License(wtfpl)',
            'Educational Community License v2.0	(ecl-2.0)'
        ],
    },
    {
        type: 'input', 
        name:"git", 
        message: 'Enter your Github repository name', 
    },
    {
        type: 'input', 
        name:"email", 
        message: 'please enter your email address',  
    },
 

]).then(function({title,description,installation,usage,test,collaborator,license,git,email}){
    let readMeGenerator =`# ${ title}

    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${git}/${title}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${git}/${title}?style=flat&logo=appveyor)
      
    Check out the badges hosted by [shields.io](https://shields.io/).
    ## Description
    ${ description}
    ## Table of Contents
    - [Installation](#installation)
    - [Tests](#tests)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    ## Installation
    ${ installation}
    ### Tests
    ${ test}
    ## Usage
    ${ usage}
    ## Contributing
    you may fork this application by the following steps
     1. **Fork** the repo on GitHub
     2. **Clone** the project to your own machine
     3. **Commit** changes to your own branch
     4. **Push** your work back up to your fork
    ## Credits
    ${ collaborator}
    ## License
    
    ![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)
    
    * Licensed under the ${ license} License. Copyright © 2022
    ---
    ## Contacts
    GitHub: [${ git}](https://github.com/${ git}/)
    Email: [${ email}](mailto:${ email}$)`

    fs.writeFileSync(`./file/${title}-README.md`, readMeGenerator)

})