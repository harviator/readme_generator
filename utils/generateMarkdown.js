const license = response.license;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache":
      return `![Apache Badge](https://img.shields.io/badge/License-Apache-blue)`;
      break;
    case "GNU":
      return `![GNU Badge](https://img.shields.io/badge/License-GNU-red)`;
      break;
    case "ISC":
      return `![ISC Badge](https://img.shields.io/badge/License-ISC-orange)`;
      break;
    case "MIT":
      return `![MIT Badge](https://img.shields.io/badge/License-MIT-green)`;
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  
  return `${renderLicenseBadge}
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

module.exports = generateMarkdown;
