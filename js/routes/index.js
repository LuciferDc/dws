var express = require('express');
var circular = require('circular-json');
var router = express.Router();

var configs = require('../config/config_local');
var api = configs.ALLAPI();

var reptile = require("../mgr/reptilemgr");
var datare = require("../mgr/repdatamgr");
var ShanghaiReptileDb = require('../db/shanghai_teptile_db')

var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.send(circular.stringify(global));
  // res.render('index', { title: 'Express'});
});

router.get('/reptile', (req, res, next) => {
  // api = api.BILIBILIAPI;
  // var host = api.GETLISTHOST;
  // var path = api.GETLISTTPATH;
  // var data = api.SEARCHMODEL;
  // // console.log(api);
  // data.time_from = new Date().CalDate(-7);
  // data.time_to = new Date().CalDate(0);
  // var req = {};
  // req.data = data;
  // req.type = 0;
  ShanghaiReptileDb.getCodeList(res => {
    // let productId = res[0].code;
    
    
    // for(let i of res) {
    //   let productId = i.code;

    // }
  })

})

module.exports = router;
