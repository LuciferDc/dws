var crypto = require('crypto');
exports.md5 = function (content) {
	var md5 = crypto.createHash('md5');
	md5.update(content);
	return md5.digest('hex');	
}

exports.toBase64 = function(content){
	return new Buffer(content).toString('base64');
}

exports.fromBase64 = function(content){
	return new Buffer(content, 'base64').toString();
}

exports.getEncAes128 = function(str, secret) {
    var cipher = crypto.createCipher("aes-128-ecb", secret); //设置加密类型 和 要使用的加密密钥
    var enc = cipher.update(str, "utf8", "hex");    //编码方式从utf-8转为hex;
    enc += cipher.final("hex"); //编码方式从转为hex;
    return enc; //返回加密后的字符串
}

exports.getDecAes128 = function(str, secret) {
    var decipher = crypto.createDecipher("aes-128-ecb", secret);
    var dec = decipher.update(str, "hex", "utf8");//编码方式从hex转为utf-8;
    dec += decipher.final("utf8");//编码方式从utf-8;
    return dec;
}

exports.getEncAes192 = function(str, secret) {
    var cipher = crypto.createCipher("aes192", secret); //设置加密类型 和 要使用的加密密钥
    var enc = cipher.update(str, "utf8", "hex");    //编码方式从utf-8转为hex;
    enc += cipher.final("hex"); //编码方式从转为hex;
    return enc; //返回加密后的字符串
}

exports.getDecAes192 = function(str, secret) {
    var decipher = crypto.createDecipher("aes192", secret);
    var dec = decipher.update(str, "hex", "utf8");//编码方式从hex转为utf-8;
    dec += decipher.final("utf8");//编码方式从utf-8;
    return dec;
}