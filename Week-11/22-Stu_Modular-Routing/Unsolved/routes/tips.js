const tips = require('express').Router();

// TODO: Import helper functions and dependencies
const fsUtils = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


// TODO: GET Route for retrieving all the tips
tips.get('/', (req, res) => {
    console.info(`${req.method} request received to add tip`)
})


// TODO: POST Route for a new UX/UI tip



module.exports = tips;



//extra notes 
//res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))