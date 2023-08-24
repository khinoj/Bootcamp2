const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What State do you live in?',
            name: 'state',
        },
        {
            type: 'input',
            message: 'Give a brief Bio?',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'Your GitHub UR?',
            name: 'github',
        },
    ])
    .then((data) => {
        const filename = `idk.txt`

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.error(err) : console.log('Created File!')
        );
    })

let validHtml = `${answer.name} ${answer.state} `





