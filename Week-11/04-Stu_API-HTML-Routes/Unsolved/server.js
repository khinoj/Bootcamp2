// TODO: Import express
const express = require('express')
const termData = require('./terms.json')

// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req, res) => res.json(termData));


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
