var express = require('express');
var circular = require('circular-json');
var router = express.Router();

var configs = require('../config/config_local');
var api = configs.ALLAPI();

var reptile = require("../mgr/reptilemgr");
var datare = require("../mgr/repdatamgr");
var ShanghaiReptileDb = require('../db/shanghai_teptile_db')

var exec = require('child_process').exec;
