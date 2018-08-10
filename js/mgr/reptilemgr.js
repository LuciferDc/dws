
var http = require("http")
var https = require("https")
var fs = require("fs")
var cheerio = require("cheerio")
var qs = require('querystring')

var iconv = require("iconv-lite")

reptile = function(HOST, PATH, DATA, callback) {
    var content = qs.stringify(DATA.data);
    //var url = 'https://www.bilibili.com/v/kichiku/?spm_id_from=333.334.primary_menu.59';
    var options = {
        //url: 'https://www.bilibili.com/v/kichiku/?spm_id_from=333.334.primary_menu.59',
         hostname:HOST,
         path:PATH + '?' + content,
        method:'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent':'Mozilla/5.0(Windows;U;WindowsNT6.1;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50',
        }
    };
      
    var req = https.request(options, function(res) {
        var chunks = [];
        var size = 0;
        res.on('data', function(chunk) {
           chunks.push(new Buffer(chunk));
           size += chunk.length;  
        })
        res.on('end', function() {
            var data = Buffer.concat(chunks, size).toString();
            var resu = {};
            resu.type = DATA.type;
            resu.data = data; 
            callback(resu);
            //  console.log(data.result[0]);
        })
        
    })
    req.on('error', function(err) {
        console.log('problem with request: ' + e.message);
		callback(false,e);
        // console.log(err.message);
    })
    req.end(function() {
        //console.log($);
    })
   
    
}





