//1.引入需要的模块
var mysql = require('mysql');

var pool = global.pool;

if(!pool){
    //2.建立数据库连接池
    var pool = mysql.createPool({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'root',
        database:'web1702'
    });
    console.log('已连接到数据库...');
    global.pool = pool;
}

//3.暴露连接池
module.exports = pool;

