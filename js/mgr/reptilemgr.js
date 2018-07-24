
var http = require("http")
var https = require("https")
var fs = require("fs")
var cheerio = require("cheerio")

var iconv = require("iconv-lite")

reptile = function(callback) {
    var url = 'https://www.bilibili.com/v/kichiku/?spm_id_from=333.334.primary_menu.59';
    var options = {
        //url: 'https://www.bilibili.com/v/kichiku/?spm_id_from=333.334.primary_menu.59',
         host:'s.search.bilibili.com',
         path:'/cate/search?main_ver=v3&search_type=video&view_type=hot_rank&pic_size=160x100&order=click&copy_right=-1&cate_id=22&page=1&pagesize=5&time_from=20180717&time_to=20180724',
        method:'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent':'Mozilla/5.0(Windows;U;WindowsNT6.1;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50',
        }
    };
    var chunks = [];
    var req = https.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);  
        res.setEncoding('utf8');
        
        res.on('data', function(chunk) {
           chunks.push(chunk);
            // var $ = cheerio.load(chunk);
            //var a = iconv.decode(Buffer.concat(chunks), 'gb2312');
            chunk = JSON.parse(chunk);
            console.log(chunk);
                //console.log($);
                       //console.log(a);
            //callback(chunk);
        })
        
    })
    req.on('error', function(err) {
        console.log(err.message);
    })
    req.end(function() {
        
       
        //console.log($);
        console.log(chunks);
    })
   
    
}

reptile();