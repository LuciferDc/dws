#-*-coding:utf-8 -*-
import urllib2  
import random  
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )
import requests


# url="http://query.sse.com.cn/security/stock/queryCompanyStatementNew.do?jsonCallBack=jsonpCallback20408&isPagination=true&productId=" + sys.argv[1] + "&keyWord=%E8%82%A1%E6%9D%83%E6%BF%80%E5%8A%B1&isNew=1&reportType2=&reportType=ALL&beginDate=2015-11-20&endDate=2018-11-19&pageHelp.pageSize=25&pageHelp.pageCount=50&pageHelp.pageNo=1&pageHelp.beginPage=1&pageHelp.cacheSize=1&pageHelp.endPage=5&_=1542601985431"  
  
# my_headers=["Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36",  
# "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36",  
# "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0"  
# "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14",  
# "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)"  
# ]  
# def get_content(url,headers):  
#     randdom_header=random.choice(headers)  
#     req=urllib2.Request(url)  
#     req.add_header("User-Agent",randdom_header)  
#     req.add_header("Host","query.sse.com.cn")  
#     req.add_header("Referer","http://www.sse.com.cn/assortment/stock/list/info/announcement/index.shtml?productId=600000")  
#     req.add_header("GET",url)
#     content=urllib2.urlopen(req, timeout=5).read()  
#     return content
# print get_content(url,my_headers)
page = sys.argv[1]

header2 = {}
header2['Accept'] = 'application/json, text/javascript, */*; q=0.01'
header2['Accept-Encoding'] = 'gzip, deflate'
header2['Accept-Language'] = 'zh-CN,zh;q=0.9'
header2['Connection'] = 'keep-alive'
header2['Content-Length'] = '148'
header2['Content-Type'] = 'application/json'
header2['Host'] = 'www.szse.cn'
header2['Origin'] = 'http://www.szse.cn'
header2['Referer'] = 'http://www.szse.cn/disclosure/listed/notice/'
header2['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
header2['X-Request-Type'] = 'ajax'
header2['X-Requested-With'] = 'XMLHttpRequest'

url="http://www.szse.cn/api/disc/announcement/annList?random=0.7677203973163149"

key="激励"
response2 = requests.post(url, data=json.dumps({"seDate":["2011-01-01","2018-11-19"],"searchKey":[key],"channelCode":["listedNotice_disc"],"pageSize":30000,"pageNum":page,"sortPublishTime":"desc"}), headers=header2)# abc
cookie = response2.cookies.get_dict()
f = open("out.txt", "w") 
f.write(response2.text)
print(response2.text)