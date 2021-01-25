var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', // 连接的本地mysql
    user: 'root', // 用户名
    password: '123456', // 密码
    port: '3306', // 端口号
    database: 'amao' // 数据库名
});

connection.connect(); // 建立连接

var sql = 'select * from user'; // 查询的表名 TODO：目前node直接调用已经可以实现输入，后续完善接口配置相关
connection.query(sql, function (err, result) {
    if (err) {
        console.log('error', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    
});


connection.end();