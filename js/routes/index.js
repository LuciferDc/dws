var express = require('express');
var circular = require('circular-json');
var router = express.Router();

var configs = require('../config/config_local');
var api = configs.ALLAPI();

var reptile = require("../mgr/reptilemgr");
var datare = require("../mgr/repdatamgr");

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.send(circular.stringify(global));
 // res.render('index', { title: 'Express'});
});

router.get('/reptile', (req, res, next) => {
  api = api.BILIBILIAPI;
  var host = api.GETLISTHOST;
  var path = api.GETLISTTPATH;
  var data = api.SEARCHMODEL;
  // console.log(api);
  data.time_from = new Date().CalDate(-7);
  data.time_to = new Date().CalDate(0);
  var req = {};
  req.data = data;
  req.type = 0;
  
  reptile.reptile(host, path, req, (re) => {
    //console.log(re.data);
    if(!re.type) {
      datare.savedata(re, (resu) => {
        for(var i in resu) {
          console.log(resu[i].id);
          host = api.BASICHOST;
          path = api.VIDEOPATH + resu[i].id;
          req.data = null;
          req.type = 1;
          reptile.reptile(host, path, req, (re) => {
            
          })
        }
        res.send("ok");
      })
    }
  })
 // console.log(api);
})

module.exports = router;
