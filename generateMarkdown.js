function renderLicenseBadge(license) {
  // Check if a license is specified
  if (license !== 'None') {
    // If a license is specified, return a string with the license badge URL
    return `![GitHub licens badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // If no license is specified, return an empty string
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   // Check if a license is specified
   if (license !== 'None') {
    // If a license is specified, return a string with the license badge URL
    return 'https://choosealicense.com/](https://choosealicense.com/)';
  }
  // If no license is specified, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return 'Here is the ${license} section';
  }
  return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

  ## Installation
  ## Usage
  ## Credits
  ## License
  ## Badges
  ## How to Contribute
  ## Tests

`;
}

renderLicenseBadge(license)
renderLicenseLink(license)
renderLicenseSection(license)
generateMarkdown(data)

module.exports = generateMarkdown;
