// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the purpose of your project? (description)',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your application?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you run your tests for your application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the license for your application?',
    choices: ['MIT', 'APACHE 2.9', 'GPL 3.0', 'None'],
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

function UserInput(questions) {
  // Prompted the questions with inquirer
    inquirer.prompt(questions)
    .then(function(answers) {
        writeToFile('Generated-README.md', generateMarkdown(answers))
    });

    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log(`${fileName} created`)
    );

}

// TODO: Create a function to initialize app
function init() {
  // Called the UserInput function 
    UserInput(questions)
}

// Function call to initialize app
init();
