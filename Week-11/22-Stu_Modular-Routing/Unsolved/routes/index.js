// TODO: Import express
const express = require('express');


// TODO: Import modules for tips/feedback
const tips = require('./tips');
const feedback = require('./feedback')


// TODO: Create app variable to create an instance of express()
const app = express();


// TODO: Use our routes
app.use('/tips', tips)
app.use('/feedback', feedback)

// TODO: Export app
module.export = app;