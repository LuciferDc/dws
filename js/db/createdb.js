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

exports.createTable = function(aid, cid, callback) {
    callback = callback == null ? nop:callback;
    var sql = 'create table if not exists {0}_{1} (tid int(10) not null auto_increment, ctime decimal(10, 5) not null, ctype int(1) not null, fontsize int(3) not null, color int(8) not null, ttime bigint(14) not null, cpool int(1) not null, midhash varchar(10) not null, rowid bigint(18) not null, primary key(tid))';
    sql = sql.format(aid, cid);
    console.log(sql);
    query(sql, function(err, rows, fields) {
        if(err) {
          callback(err); return;
        }
        callback(true);
    })
}

exports.a = function(callback) {
    callback = callback == null ? nop:callback;
    var sql = 'select id from ins_enterprise where id not in (select c_enterprise_id from ins_enterprise_member)';
    query(sql, function(err, rows, fields) {
        if(err) {
          callback(err); return;
        }
        callback(rows);
    })
}

exports.b = function(data, callback) {
    var sql = 'insert into ins_enterprise_member (c_enterprise_id, c_deadline) values '
    var flag = 1;
    for(var i of data) {
        if(flag) {
            sql += '(' + i.id + ', ' + i.d + ')'
            flag = 0;
        } else {
            sql += ', (' + i.id + ', ' + i.d + ')'
        }
    }
    // console.log(sql);
    query(sql, function(err, rows, fields) {
        if(err) {
          callback(err); return;
        }
        callback(true);
    })
}
