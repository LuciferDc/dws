# redirect
---------------
```$xslt
npm i
npm run dev
```
nginx服务
docker-compose ps
docker-compose stop wanli-nginx
docker-compose rm
docker-compose up --force-recreate -d wanli-nginx

h5总域名
h5.platform.wanli268.com

后台服务

正式版---129.211.111.42:8004  
域名---servers.wanli268.com
更新用代码---
cd wanli-eros/wanli-server-v4
docker-compose ps
docker-compose stop wanli-server-v4
docker-compose rm
docker-compose build --no-cache wanli-server-v4
docker-compose up -d wanli-server-v4

测试版---129.211.111.42:8005  
域名---servers.test.wanli268.com
更新用代码---
cd wanli-eros/wanli-server-v4
docker-compose ps
docker-compose stop wanli-server-v4-b
docker-compose rm
docker-compose build --no-cache wanli-server-v4-b
docker-compose up -d wanli-server-v4-b

算法服务

正式版---129.211.111.42:1268  
域名---algorithm.wanli268.com
更新用代码---
cd wanli-eros/wanli-server-v4
docker-compose ps
docker-compose stop wanli-algorithm
docker-compose rm
docker-compose build --no-cache wanli-algorithm
docker-compose up -d wanli-algorithm

测试版---129.211.111.42:1269  
域名---algorithm.test.wanli268.com
更新用代码---
cd wanli-eros/wanli-server-v4
docker-compose ps
docker-compose stop wanli-algorithm-b
docker-compose rm
docker-compose build --no-cache wanli-algorithm-b
docker-compose up -d wanli-algorithm-b

h5正式版---129.211.111.42:1270  
域名---algorithm.mobile.wanli268.com
更新用代码---
cd wanli-eros/wanli-server-v4
docker-compose ps
docker-compose stop wanli-algorithm-h5
docker-compose rm
docker-compose build --no-cache wanli-algorithm-h5
docker-compose up -d wanli-algorithm-h5


node环境说明

NODE_DEPLOY_ENV 
连接数据库环境为 production 
连接腾讯数据库为 dataSourceDev
连接本地测试环境为 test
微信远程测试环境为 wechatTest


