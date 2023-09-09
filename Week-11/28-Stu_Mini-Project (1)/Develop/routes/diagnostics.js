const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid'); //creates unquie ID
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/dianostics.json').then((data) => 
  res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  console.info(`${req.method} request received`)


});

module.exports = diagnostics;
