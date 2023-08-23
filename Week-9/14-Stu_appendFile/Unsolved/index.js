// TODO: What are we importing? Node package for reading and writing files
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// appendfile file name is log.txt may create if needed
// text from array spot 2
//cb error err 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
