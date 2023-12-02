// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ title, description, installation, usage, contributing, test, license, username, email }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">${title}</h1>
      <h2> Example heading <span class="badge bg-secondary">Description </span><h2> 
      <p class="lead"> ${description}.</p>
      <h3> Table of Contents <h3> 
      <h4> Installation <h4> 
      <p>${installation}.</p>
      <h5> Usage <h5> 
      <p>${usage}.</p>
      <h7> Contributing <h7> 
      <p>${contributing}.</p>
      <h8> Tests <h8> 
      <p>${test}.</p>
      <h6> License <h6> 
      <p>${license}.</p>
      <h9> Questions <h9> 
      <p>${username}.</p>
      <p>${email}.</p>

    </div>
  </header>
</body>
</html>`;

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of the what, why and how for your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples on how to use your application',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please include guidelines on how others can contribute to your project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide instructions on how to run your tests for your application ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your application ',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
