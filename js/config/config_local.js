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


exports.ALLAPI = function() {
    return {
        BILIBILIAPI: {
            CHATHOST:'api.bilibili.com',
            CHATPATH:'/x/v1/dm/list.so?oid=',

            BASICHOST:'www.bilibili.com',

            GETLISTHOST:'s.search.bilibili.com',
            GETLISTTPATH:'/cate/search',
            
            VIDEOPATH:'/video/av',
            KICHIKUGUIDECATEID:22,
            KICHIKUMADCATEID:26,
            KICHIKUNANUALVOCALOIDCATEID:126,

            SEARCHMODEL: {
                main_ver:'v3',
                search_type:'video',
                view_type:'hot_rank',
                pic_size:'160x100',
                order:'click',
                copy_right:-1,
                cate_id:22,
                page:1,
                pagesize:20,
                time_from:'20180720',
                time_to:'20180727'
            }
        }
    }
}