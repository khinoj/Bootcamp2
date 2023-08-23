const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What languages do you know',
            name: 'languages',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'communication',
        },
    ])
    .then((data) => {
        console.log(data);
    })