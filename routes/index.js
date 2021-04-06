var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', loggedIn: req.user ? true : false, user:req.userInfo });
  
});

module.exports = router;
