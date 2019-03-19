var express = require("express");
var app = express();
//服务器端口
var server = app.listen(3000);
var ws = require("nodejs-websocket");
//创建服务器，实现握手操作，connection
var server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        server.connections.forEach(function (connection) {
            connection.sendText(str);
        });
    });
});
//设置服务器代理端口
server.listen(8088);