var reptilemgr = require("../mgr/reptilemgr")
var express = require("express");
var bodyparser = require("body-parser");
var app = express();

var config = null;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

exports.start = function($config){
	config = $config;

	//
	gameServerInfo = {
		id:config.SERVER_ID,
		clientip:config.CLIENT_IP,
		clientport:config.CLIENT_PORT,
		httpPort:config.HTTP_PORT,
		//load:roomMgr.getTotalRooms(),
	};

	//setInterval(update,1000);
	app.listen(config.HTTP_PORT);
	console.log("http server is listening on :" + config.HTTP_PORT);
};