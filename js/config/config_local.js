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