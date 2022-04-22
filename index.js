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
 

])