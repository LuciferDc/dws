var mysqlpool = require("../utils/mysqlPool");
var fs = require("fs");
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

exports.insertall = function(arr, callback) {
    callback = callback == null ? nop:callback;
    var sql = 'insert into bilibili_video_gui22 (t_id, arcurl, author, description, duration, favorite, mid, play, pubdate, review, senddate, tag, title, video_review)  values';
    var keys = [];
    keys = Object.getOwnPropertyNames(arr[0]);
    for(var ar in arr) {
        if(ar == 0) {
            sql += '(';
        } else {
            sql += ' ,(';
        }
        sql += '{id' + ar + '}, "{arcurl' + ar + '}", "{author' + ar + '}", "{description' + ar + '}", {duration' + ar + '}, {favorites' + ar + '}, {mid' + ar + '}, "{play' + ar + '}", "{pubdate' + ar + '}", {review' + ar + '}, {senddate' + ar + '}, "{tag' + ar + '}", "{title' + ar + '}", {video_review' + ar + '}';
        sql +=')';
    }
    sql = sql.arrformat(arr);
    console.log(sql);
    // fs.writeFileSync("../document/test.out", sql);
    query(sql, function(err, rows, fields) {
        if(err) {
          callback(err); return;
        }
        callback(true);
    })
} 