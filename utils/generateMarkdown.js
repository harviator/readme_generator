// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  switch(response) {
    case "Apache":
      return `![Apache Badge](https://img.shields.io/badge/License-Apache-blue)`;
    case "GNU":
      return `![GNU Badge](https://img.shields.io/badge/License-GNU-red)`;
    case "ISC":
      return `![ISC Badge](https://img.shields.io/badge/License-ISC-orange)`;
    case "MIT":
      return `![MIT Badge](https://img.shields.io/badge/License-MIT-green)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  switch(response) {
    case "Apache":
      return `The license for this application is the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    case "GNU":
      return `The license for this application is the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
    case "ISC":
      return `The license for this application is the [ISC License](https://choosealicense.com/licenses/isc/)`;
    case "MIT":
      return `The license for this application is the [MIT License](https://choosealicense.com/licenses/mit/)`;
    default:
      return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  
  return `${(renderLicenseBadge(response.license))}
  # ${response.title}

  ## Descrition 
  ${response.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Licensee](#license)
  [Contribution Guidelines](#contribution guidelines)
  [Test Instructions](#test instructions)
  [Questions](#questions)

  ## Installation
  ${response.installation}

  ## License

  ## Contribution Guidelines
  ${response.contributions}

  ## Test Instructions
  ${response.test}

  ## Questions
  ${response.contactInstructions}

  ${response.email}
  ${response.githubProfile}

  ${response.githubUsername}
`;
}

module.exports = {generateMarkdown};
