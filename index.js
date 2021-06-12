// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
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
        type: "list",
        message: "Please select a license for your application",
        choices: ["Apache", "GNU", "ISC", "MIT"],
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

// Function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('Great Success!');
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {

        console.log(response);
        
        const returnData = generateMarkdown.generateMarkdown(response);

        writeToFile('README.md', returnData);
    })
    .catch(err => err ? console.log(err) : console.log('Success!'));
}

// Function call to initialize app
init();
