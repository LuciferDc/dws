// var reg = new RegExp(/<script>window.__INITIAL_STATE__={[\S\s]*<\/script>/);// '/m';
// var str = str.match(reg);
var db = require("../db/gui22db");

exports.savedata = function(DataCue, callback) {
    //console.log(DataCue);
    if(DataCue.type == 0) {
        DataCue = JSON.parse(DataCue.data);
        DataCue = DataCue.result;
        db.insertall(DataCue, function(re) {
            callback(DataCue);
        })
    } else if(DataCue.type == 1) {

    }
}

