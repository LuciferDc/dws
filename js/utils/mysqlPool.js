var  mysql = require('mysql');

var config = require("../config/config_local");

config = config.mysql();
/**
 * 池对象
 */
var pool = null;

/**
 * 初始化数据库
 */
function init(){
    pool = mysql.createPool({  
        host: config.HOST,
        user: config.USER,
        password: config.PWD,
        database: config.DB,
        port: config.PORT
    });
}; 

function getPool(){
    if(pool == null){
        init();
    }

    return pool;
}

exports.getPool = getPool ;