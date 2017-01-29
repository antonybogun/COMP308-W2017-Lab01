var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date();
  res.render('index', { 
    title: 'Lab 1 - Home',
    date :  currentDate.toDateString()
  });
});

router.get('/about', (req, res, next) => {
  res.render('about', { 
    title: 'Lab1 - About',
    textSubtitle: "About Text",
    imageSubtitle: "About Image",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"Assets/images/about-us.jpg"
  });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { 
    title: 'Lab1 - Contact',
    textSubtitle: "Contact Text",
    imageSubtitle: "Contact Image",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"Assets/images/contact-us.jpg"
  });
});

module.exports = router;
