
var http = require("http")
var https = require("https")
var fs = require("fs")
var cheerio = require("cheerio")
var qs = require('querystring')
var url = require('url')

var iconv = require("iconv-lite")
exports.reptile = function(HOST, PATH, DATA, callback) {
    //console.log(DATA.data);
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
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
		callback(false,e);
        // console.log(err.message);
    })
    req.end(function() {
        //console.log($);
    })
}


exports.getShanghaiReptile = function(Urls, productId, callback) {
    //console.log(DATA.data);
    //var url = 'https://www.bilibili.com/v/kichiku/?spm_id_from=333.334.primary_menu.59';
    console.log(Urls)
    var options = {
        url: Urls,
        method:'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Host': 'query.sse.com.cn',
            'Referer': 'http://www.sse.com.cn/assortment/stock/list/info/announcement/index.shtml?productId=' + productId,
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
        }
    };
    var req = http.request(options, function(res) {
        var chunks = [];
        var size = 0;
        res.on('data', function(chunk) {
           chunks.push(new Buffer(chunk));
           size += chunk.length;  
        })
        res.on('end', function() {
            var data = Buffer.concat(chunks, size).toString();
            var resu = data;             
            callback(resu);
            //  console.log(data.result[0]);
        })
        
    })
    req.on('error', function(e) {
        console.log('problem with request: ' + e);
		callback(false,e);
        // console.log(err.message);
    })
    req.end(function() {
        //console.log($);
    })
}


exports.shenzhenReptile = function(callback) {
    //console.log(DATA.data);
    let datas = {"seDate":["2011-01-01","2018-11-19"],"searchKey":["激励"],"channelCode":["listedNotice_disc"],"pageSize":34531,"pageNum":1}
    var content = qs.stringify(datas);
    //var url = 'https://www.bilibili.com/v/kichiku/?spm_id_from=333.334.primary_menu.59';
    var options = {
        //url: 'https://www.bilibili.com/v/kichiku/?spm_id_from=333.334.primary_menu.59',
        hostname: url.parse('www.szse.cn/').hostname,   
		path: '/api/disc/announcement/annList?random=0.5545395975887941',  
		method:'POST',
        headers: {
            'Accept-Ranges': 'bytes',
            'Age': 0,
            'Connection': 'keep-alive',
            'Content-Length': content.length,
            'Content-Type': 'application/json;charset=UTF-8',
            'Date': 'Mon 19 Nov 2018 05:59:53 GMT',
            'Server': 'nginx/1.10.2',
            'Via': '1.1 varnish-v4',
            'X-cache': 'MISS',
            'X-UA-Compatible': 'IE=EDGE',
            'X-Varnish': 10820664
        }
    };
    var req = http.request(options, function(res) {
        var chunks = [];
        var size = 0;
        res.on('data', function(chunk) {
           chunks.push(new Buffer(chunk));
           size += chunk.length;  
        })
        res.on('end', function() {
            var data = Buffer.concat(chunks, size).toString();
            var resu = data;             
            callback(resu);
            //  console.log(data.result[0]);
        })
        
    })
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
		callback(false,e);
        // console.log(err.message);
    })
    req.write(content);
    req.end(function() {
        //console.log($);
    })
}
