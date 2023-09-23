const router = require('express').Router();
const travellers = require('./travellers');
const locations = require('./locations');

router.use('/travellers', readerRoutes);
router.use('/locations', libraryCardRoutes);

module.exports = router;