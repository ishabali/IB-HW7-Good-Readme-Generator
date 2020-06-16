// function generateMarkdown(data) {
//   return `
// # ${data.title}

// `;
// }

// module.exports = generateMarkdown;
// ------------------------------

var inquirer = require('inquirer');
var fs = require('fs');

function generateMarkdown(data) {
  console.log('Please read each question carefully before submitting your response. Empty fields require restart of README generator. You may use markdown syntax in your responses and they will be included in the final README.md file. Enjoy!')
  inquirer.prompt([
    {
       type:'input',
       name: 'Project_Title',
       message: 'What is your project called?', 
       validate: function(text) {
         if (text === "") {
           return 'Field must not be empty.'
         }
         return true;
       }
    },
    {
        type:'input',
        name: 'Project_Description',
        message: 'Please give a brief Description!', 
        validate: function(text) {
          if (text === "") {
            return 'Field must not be empty.'
          }
          return true;
        }
    },
    {
      type: 'editor',
      name: 'Table_O_Contents',
      message: 'Please provide a table of contents. Add two spaces after each line for line break.',
      validate: function(text) {
        if (text.split('\n').length < 3) {
          return 'Must be at least 3 lines. Restart README generator.';
        }
        return true;
      },
    },
    {
      type: 'editor',
      name: 'Installation_Process',
      message: 'Please describe the Installation process. Add two spaces after each line for line break.',
      validate: function(text) {
        if (text.split('\n').length < 3) {
          return 'Must be at least 3 lines. Restart README generator.';
        }
        return true;
      }
    },
    {
      type:'input',
      name: 'Usage',
      message: 'Please describe intent of usage.', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type:'input',
      name: 'License',
      message: 'Please describe licensing terms of your software.', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      } 
    },
    {
      type:'input',
      name: 'Contributing',
      message: 'Please describe contribution guidelines.', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type:'input',
      name: 'Tests',
      message: 'Please describe tests completed prior to publication.', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    }, 
    {
      type:'input',
      name: 'Questions',
      message: 'Please share contact detail (e-mail) to direct questions.', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    }, 
    {
      type:'input',
      name: 'GitHub_Username',
      message: 'Enter User GitHub Username.', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    }, 
    {
      type:'input',
      name: 'GitHub_Email',
      message: 'Enter User GitHub E-Mail.', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    }
  ])
  .then(function(answers)  {
      console.log('This is first answer!!!', answers); 
      var readMeString = 
`# Title:  ${answers.Project_Title}
## Description:  ${answers.Project_Description}
## Table of Contents: \n${answers.Table_O_Contents}
## Installation Process: \n${answers.Installation_Process}
## Usage: ${answers.Usage}
## License: ${answers.License}
## Contributing: ${answers.Contributing}
## Tests: ${answers.Tests}
## Questions: ${answers.Questions}
## GitHub Username: ${answers.GitHub_Username}
## GitHub E-Mail: ${answers.GitHub_Email}
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`

    fs.writeFile('../README.md', readMeString, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

  })
}

module.exports = {
  generateMarkdown
}
