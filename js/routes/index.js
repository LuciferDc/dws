var express = require('express');
var circular = require('circular-json');
var router = express.Router();

var configs = require('../config/config_local');
var api = configs.ALLAPI();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(global);
 // res.send(circular.stringify(global));
 // res.render('index', { title: 'Express'});
});

router.get('/reptile', (req, res, next) => {
  
})

module.exports = router;
