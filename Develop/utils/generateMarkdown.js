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
  inquirer.prompt([
    {
       type:'input',
       name: 'Project_Title',
       message: 'What is your project called ?' 
    },
    {
        type:'input',
        name: 'Project_Description',
        message: 'Please give a brief Description!' 
     },
     {
      type:'input',
      name: 'Table_O_Contents',
      message: 'Please provide a table of contents.' 
      }
  ])
  .then(function(answers)  {
      console.log('This is first answer!!!', answers); 
      var readMeString = `
  # Title ${answers.Project_Title}
  # Description ${answers.Project_Description}
  # Table of Contents ${answers.Table_O_Contents}
      `
      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  })
//   return `
// # ${data.title}
// `;
}
// module.exports = generateMarkdown;
module.exports = {
  generateMarkdown
}

