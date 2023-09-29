const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('test');
  });


  router.get('/project', async (req, res) => {
    res.render('proejct');
  });


  module.exports = router;