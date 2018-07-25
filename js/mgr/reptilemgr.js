
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
         path:'/cate/search?main_ver=v3&search_type=video&view_type=hot_rank&pic_size=160x100&order=click&copy_right=-1&cate_id=22&page=1&pagesize=20&time_from=20180717&time_to=20180724',
        method:'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent':'Mozilla/5.0(Windows;U;WindowsNT6.1;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50',
        }
    };
      
    var req = https.request(options, function(res) {
        var str = 'aaa<script>window.__INITIAL_STATE__={"aid":"27567238","p":"","videoData":{"aid":27567238,"videos":1,"tid":31,"tname":"翻唱","copyright":1,"pic":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002Fee37faad099972ee95119752bc26582a7295ba41.jpg","title":"【花玲】前来忏悔","pubdate":1532357584,"ctime":1532357584,"desc":"本家：sm32688081 \u002Fav19179398\n唱：花玲\n混：三星堆工作室（QQ:1541386006）\n听了まふまふ的版本就很想唱hhh感谢发现良曲\n主要歌词也很喜欢~感谢后期拯救高音~\n这次不奶了吧！！！\n音频下载：http:\u002F\u002F5sing.kugou.com\u002Ffc\u002F16627248.html\n\n这个应该不算10万粉福利吧2333\n可以算吗可以算吗~","state":0,"attribute":16512,"duration":203,"rights":{"bp":0,"elec":0,"download":1,"movie":0,"pay":0,"hd5":0,"no_reprint":1,"autoplay":1},"owner":{"mid":7966,"name":"花园花玲","face":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fface\u002Fe3583dadb5178df27974c141e59b3a56e5f2e95a.jpg"},"stat":{"aid":27567238,"view":"--","danmaku":"--","reply":601,"favorite":"--","coin":"--","share":"--","now_rank":0,"his_rank":0,"like":2114,"dislike":2},"dynamic":"#懺悔参り##国人翻唱#假装是福利可以吗！！【大雾】","cid":47564897,"dimension":{"width":1280,"height":720,"rotate":0},"no_cache":false,"pages":[{"cid":47564897,"page":1,"from":"vupload","part":"前来忏悔","duration":203,"vid":"","weblink":"","dimension":{"width":1280,"height":720,"rotate":0}}],"embedPlayer":"EmbedPlayer(\"player\", \"\u002F\u002Fstatic.hdslb.com\u002Fplay.swf\", \"cid=47564897&aid=27567238&pre_ad=\")"},"upData":{"mid":"7966","name":"花园花玲","approve":false,"sex":"女","rank":"10000","face":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fface\u002Fe3583dadb5178df27974c141e59b3a56e5f2e95a.jpg","DisplayRank":"0","regtime":0,"spacesta":0,"birthday":"","place":"","description":"","article":0,"attentions":[3514303,246221012,11431931,2407009,86735192,327546377,108833238,2069615,284814707,19696996,10183080,387524,2078226,71121028,249118,4385714,797614,260808175,53456,530840,3428794,9283734,8965392,7838526,98583759,284560871,4176573,7248181,570735,3007453,10949920,3025274,319656889,1893045,5503689,317423945,7050281,286054977,230364350,6221732,864314,17409016,35044122,1914793,98079550,477007,16307541,32786875,5186913,60643703,4674110,1577804,742365,2862976,4677463,652248,67778365,1629850,23650471,16351122,215210,201293,242531819,331520,317866,16794231,14929452,3291867,39742326,1864036,689904,137560931,35874471,863092,1293980,2084361,20432065,22509608,18739124,15216386,10158092,201434,2502022,13086801,122663235,322892,183430,312001,16539048,204010957,125454930,29010949,180708743,176756724,30643878,19577966,3046429,11253297,20503549,15551906,632751,1978392,18157359,11131476,126612,5875252,28894948,431471,9668241,133934,2306780,2508135,3541007,11022253,22946482,24535242,6367417,3158353,2949989,24751084,7012814,11086015,30329614,1320581,66822870,9173602,1677445,18075990,12747648,7223194,650042,3697309,3837681,15969112,597396,27534330,1320347,111559,1872628,14558631,3657810,3529766,12444306,1740792,799473,40389553,423607,31050150,62093,9704730,16671656,35500949,878809,12633655,302145,41190,13763303,65830,51154979,8199,23193578,22025350,4469745,14634764,6881318,433351,11354782,370515,373240,1111556,689753,30637628,10477576,232150,2487140,1597982,12815700,3460280,21540303,28828559,1894748,3590414,234256,647576,11684516,284120,198439,6810019,4408371,100302,21471064,920713,12304806,10234920,8960728,1405597,9097604,19003306,120575,2616957,512480,11073,3619550,282994,2896,1300281,284424,21499,395,81192,236260,116683,5681],"fans":102724,"friend":213,"attention":213,"sign":"养猪专业户 微博：花玲00","level_info":{"current_level":6,"current_min":0,"current_exp":0,"next_exp":0},"pendant":{"pid":0,"name":"","image":"","expire":0},"nameplate":{"nid":9,"name":"出道偶像","image":"http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Fface\u002F3f2d64f048b39fb6c26f3db39df47e6080ec0f9c.png","image_small":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fface\u002F90c35d41d8a19b19474d6bac672394c17b444ce8.png","level":"高级勋章","condition":"所有自制视频总播放数\u003E=50万"},"Official":{"role":0,"title":"","desc":""},"official_verify":{"type":-1,"desc":""},"vip":{"vipType":1,"dueRemark":"","accessStatus":0,"vipStatus":1,"vipStatusWarn":""},"archiveCount":23},"tags":[{"tag_id":386,"tag_name":"翻唱","cover":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F192ee6bb1c5fb191a963711a6528376759cfe497.jpg","content":"1","type":3,"state":0,"ctime":1436866637,"count":{"view":0,"use":0,"atten":0},"is_atten":0,"likes":0,"hates":0,"attribute":0,"liked":0,"hated":0,"showDetail":false,"showReport":false,"timeOut":null},{"tag_id":6135724,"tag_name":"懺悔参り","cover":"","content":"","type":0,"state":0,"ctime":1517837576,"count":{"view":0,"use":0,"atten":0},"is_atten":0,"likes":1,"hates":0,"attribute":0,"liked":0,"hated":0,"showDetail":false,"showReport":false,"timeOut":null},{"tag_id":58504,"tag_name":"国人翻唱","cover":"http:\u002F\u002Fstatic.hdslb.com\u002Fimages\u002Ftransparent.gif","content":"","type":3,"state":0,"ctime":1436866637,"count":{"view":0,"use":0,"atten":0},"is_atten":0,"likes":0,"hates":0,"attribute":0,"liked":0,"hated":0,"showDetail":false,"showReport":false,"timeOut":null},{"tag_id":3590937,"tag_name":"羽生迷子","cover":"","content":"","type":0,"state":0,"ctime":1496275242,"count":{"view":0,"use":0,"atten":0},"is_atten":0,"likes":0,"hates":0,"attribute":0,"liked":0,"hated":0,"showDetail":false,"showReport":false,"timeOut":null}],"comment":{"count":601,"list":["花玲终于发新歌了[小电视_哭泣]我终于前排了","这下你不能说星与你消失之日唱不上去了吧[小电视_笑]","今日も今日とて眺めてみようか\n喜怒哀楽修羅の街\n地獄の縁で咲いてた\n嫉妬嫉妬嫉妬有象無象\n\nどうかどうか貴方の為に\n祈らないで願わないで\n何もできやしないさ\n子供騙しおまじない\n\n逆さの地蔵\n神様も神様も\n夜は寂しいから\n赦してよ赦してよ\nいつも僕のせいさ\n\n今日も今日とて変わらないようだ\n願わくば海の底\nさよならまた会いましょう\nずっとずっとずっと此処にいるよ\n\nどうかどうか貴方の為に\n迷わないで探さないで\n笑う門で泣いてた\n届いてと願う声に\n答えないで\n\n神様も神様も\n明日は見えないから\n転んだって転んだって\n此処に来ちゃいけない\n\n\nまだ間に合うから手を離した\n寂しくはないから\nそれもいいのかな\nさよなら\n\n帳は朽ち果て夜の中へ\n誰が為生きよう\nいつか見ていた\n浮世の夢\n\n神様も神様も\n貴方と語りたい\nちっぽけなちっぽけな\n懺悔を聞いて\n\n離さないで離さないで\nもしもなんて夢を\n僕が全部僕が全部\n叶えてあげれたら\nふたりで\n\n馬鹿みたいに笑ってた\nかな"]},"related":[],"isClient":false,"error":{},"player":"","playurl":{}};(function(){var s;(s=document.currentScript||document.scripts[document.scripts.length-1]).parentNode.removeChild(s);}());</script>ssss';
        // console.log(str);
        var reg = new RegExp(/<script>window.__INITIAL_STATE__={[\S\s]*<\/script>/, 'gm');// '/m';
        str = str.match(reg);
        console.log(str[0]);
        //console.log('STATUS: ' + res.statusCode);  
        res.setEncoding('utf8');
        var chunks = [];
        var test = '';
    var size = 0;
        var ch = '';
        res.on('data', function(chunk) {
           chunks.push(new Buffer(chunk));
           size += chunk.length;  
        })
        res.on('end', function() {
            var data = Buffer.concat(chunks, size).toString();
            data = JSON.parse(data);
            //  console.log(data.result[0]);
        })
        
    })
    req.on('error', function(err) {
        // console.log(err.message);
    })
    req.end(function() {
        
       
        //console.log($);
        
    })
   
    
}

reptile();


