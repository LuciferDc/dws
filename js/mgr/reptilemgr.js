exports.get2 = function (url,data,callback,safe) {
	var content = qs.stringify(data);
	var url = url + '?' + content;
	var proto = http;
	if(safe){
		proto = https;
	}
	var req = proto.get(url, function (res) {  
		//console.log('STATUS: ' + res.statusCode);  
		//console.log('HEADERS: ' + JSON.stringify(res.headers));  
		res.setEncoding('utf8');  
		res.on('data', function (chunk) {  
			console.log('BODY: ' + chunk);
            // var json = JSON.parse(chunk);
            // console.log(chunk);
			callback(true,chunk);
		});  
	});
	  
	req.on('error', function (e) {  
		console.log('problem with request: ' + e.message);
		callback(false,e);
	});  
	  
	req.end(); 
};