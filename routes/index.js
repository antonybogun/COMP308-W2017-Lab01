var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date();
  res.render('index', { 
    title: 'Lab 1',
    date :  currentDate.toDateString()
  });
});

module.exports = router;
