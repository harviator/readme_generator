// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  switch (response) {
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
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  console.log(``)
  switch (response) {
    case "Apache":
      return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    case "GNU":
      return `[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
    case "ISC":
      return `[ISC License](https://choosealicense.com/licenses/isc/)`;
    case "MIT":
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
    default:
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  console.log(response);
  switch (response) {
    case "Apache":
      return `The license for this project is ${renderLicenseLink(response)}`;
    case "GNU":
      return `The license for this project is ${renderLicenseLink(response)}`;
    case "ISC":
      return `The license for this project is ${renderLicenseLink(response)}`;
    case "MIT":
      return `The license for this project is ${renderLicenseLink(response)}`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  console.log(response.license);

  return `${(renderLicenseBadge(response.license))}
  # ${response.title}

  ## Descrition 
  ${response.description}

  ## Table of Contents
  \n [Installation](#installation)
  \n [Usage](#usage)
  \n [License](#license)
  \n [Contribution Guidelines](#contribution-guidelines)
  \n [Test Instructions](#test-instructions)
  \n [Questions](#questions)

  ## Installation
  ${response.installation}

  ## License
  ${renderLicenseSection(response.license)}

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

module.exports = { generateMarkdown };
