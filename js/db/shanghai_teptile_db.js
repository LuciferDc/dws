var mysqlpool = require("../utils/mysqlPool");
function nop(a, b, c, d, e, f, g) {
    console.log("no callback");
}

function query(sql, callback) {
    var pool = mysqlpool.getPool();
    pool.getConnection(function(err, conn) {
        if(err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function(qerr, vals, fields) {
                conn.release();
                callback(qerr, vals, fields);
            })
        }
    })
}

exports.getCodeList = (callback) => {
    callback = callback == null ? nop:callback;
    var sql = 'select code, name from shanghai_reptile';
    query(sql, function(err, rows, fields) {
        if(err) {
          callback(err); return;
        }
        callback(rows);
    })
}

exports.insert = (data, callback) => {
    callback = callback == null ? nop:callback;
    var sql = "insert into rep (data) values('" + data + "')";
    // console.log(sql)
    query(sql, function(err, rows, fields) {
        if(err) {
          callback(err); return;
        }
        callback(true);
    })
}


exports.selectrep = (callback) => {
    callback = callback == null ? nop:callback;
    var sql = "select data from rep";
    query(sql, function(err, rows, fields) {
        if(err) {
          callback(err); return;
        }
        callback(rows);
    })
} 