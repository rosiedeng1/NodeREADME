function renderLicenseBadge(license) {
  // Check if a license is specified
  if (license !== 'None') {
    // If a license is specified, return a string with the license badge URL
    return `![GitHub license badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // If no license is specified, return an empty string
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   // Check if a license is specified
   if (license !== 'None') {
    // If a license is specified, return a string with the license link URL
    return '![https://choosealicense.com/](https://choosealicense.com/)';
  }
  // If no license link is specified, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `Licensed under the ${license} license`;
  }
  return '';
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  [${data.username}](https://github.com/${data.username})  
  'You can reach me at: ${data.email} with any additional questions'


`;
}


module.exports = generateMarkdown;
