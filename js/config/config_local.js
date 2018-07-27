var LOCAL_IP = 'localhost';

exports.mysql = function() {
    return {
        HOST: LOCAL_IP,
        USER: 'root',
        PWD: 'admin123',
        DB: 'dws',
        PORT: 3306
    }
}

exports.game_server = function() {
    return {
        SERVER_ID: '001',
        SERVER_PORT: 9020,
        SERVER_TICK_TIME: 1000,
        SERVER_IP: LOCAL_IP,

        HTTP_IP: LOCAL_IP,
        HTTP_PORT: 10020,
    }
}

exports.official = function() {
    return {
        OFFICIAL_IP:'localhost',
        OFFICIAL_PORT:3000,
        OFFICIAL_PATH :{
            INFO:'/api/v1/user/info',
            LEVEL:'/api/v1/panda/level',
            BUY:'/api/v1/farm/buy'
        }
    }
}

exports.ALLAPI = function() {
    return {
        BILIBILIAPI: {
            CHATHOST:'api.bilibili.com',
            CHATPATH:'/x/v1/dm/list.so?oid=',

            BASICHOST:'www.bilibili.com',

            GETLISTHOST:'s.search.bilibili.com',
            GETLISTTPATH:'/cate/search',
            
            KICHIKUGUIDECATEID:26,
            KICHIKUMADCATEID:22,
            KICHIKUNANUALVOCALOIDCATEID:126,

            MODEL: {
                main_ver:'v3',
                search_type:'video',
                view_type:'hot_rank',
                pic_size:'160x100',
                order:'click',
                copy_right:-1,
                cate_id:26,
                page:1,
                pagesize:20,
                time_from:'20180720',
                time_to:'20180727'
            }
            
        }
    }
}