// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a brief description of your application",
        name: "description"
    },
    {
        type: "input",
        message: "How is your application installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is your application used?",
        name: "usage"
    },
    {
        type: "List",
        message: "Please select a license for your application",
        choices: ["Apache", "GNU", "ISC", "MIT"]
        name: "license"
    },
    {
        type: "input",
        message: "What are the guidelines for contributers to your application?",
        name: "contributions"
    },
    {
        type: "input",
        message: "How can someone test your application?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername"
    },
    {
        type: "input",
        message: "What is the link to your GitHub profile?",
        name: "githubProfile"
    },
    {
        type: "input",
        message: "What are some instructions for people wanting to contact you by email?",
        name: "contactInstructions"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const generateMarkdown = require('./utils/generateMarkdown.js');
        
        const returnData = generateMarkdown(response);

        //writeToFile()
    })
}

// Function call to initialize app
init();

/*
Notes:
1. A command-line application that accepts user input
2. Prompts for:
    -Title of my project - Done
    -Sections:
        -Description - Done
        -Table of Contents: - Done
            -Links to the corresponding section - Done
        -Installation - Done
        -Usage - Done
        -License(from a list of options): 
            -Badge for that licence is added near the top of the readme
            -Notice explaining which license the application is covered under
        -Contributing Guidelines - Done
        -Test Instructions - Done
        -Questions:
            -GitHub user name and profile link - Done
            -email with instructions how to reach me? - Done
*/