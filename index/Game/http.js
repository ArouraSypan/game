var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var multer = require('multer');
var fs=require('fs');
//1,接受表单的请求
app.use(bodyParser.urlencoded({extended: false}));
//2,设置下载的地址
app.use(multer({dest: '/public/images/'}).array('image'));
//设置静态文件
app.use(express.static('public'));
//指定模板引擎
app.set("view engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');
//引入数据库
var Mysql=require('./dao/userSql.js');
var mysql = new Mysql();
mysql.init();
app.get('/login',function (req,res) {
    res.render('login', {
    });
})
app.get('/game',function (req,res) {
    res.render('game', {
    });
})
app.post('/tlogin',urlencodedParser,function (req,res) {
    // req.on('data',function (data) {
    //     var data=JSON.parse(data);
    //     var name=data.name;
    //     var pass=data.password;
    //     var msg='';
    //     mysql.login(name,function (ss) {
    //         var id=ss[0].id;
    //         if(Object.keys(ss[0]).length==0){
    //             msg='0'
    //         }
    //       else if(ss[0].password == pass) {
    //             msg=1;
    //
    //         }
    //         else {
    //             msg='2'
    //         }
    //         msg=JSON.stringify(msg);
    //         res.send(msg);
    //     });
            var name=req.body.username;
            var pass=req.body.pass;
            var msg='';
            mysql.login(name,function (ss) {
                var id=ss[0].id;
                if(Object.keys(ss[0]).length==0){
                    msg='0';
                    msg=JSON.stringify(msg);
                    res.send(msg);
                }
                else if(ss[0].password == pass) {
                    mysql.getUserAttr(id,function (data) {
                        res.render('game',{
                            data:data
                        });
                    })
                }
                else {
                    msg='2';
                    msg=JSON.stringify(msg);
                    res.send(msg);
                }

        });




});


var ws = require("nodejs-websocket");
function getWs() {
    //ws = new WebSocket("ws://"+window.location.hostname+":8080");/ip访问
    //1,获得WebSocket对象，传递一个地址
    ws = new WebSocket("ws://172.26.5.20:8080");//本地访问，握手操作连接
    //2,当前连接到服务器时
    ws.onopen = function () {
        console.log("ws open");
    }
    //3,接受服务器传递回来的数据
    ws.onmessage = function (event) {
        //1,创建一个div的标签
        var div = document.createElement("div");
        //2,把接收到的数据给div标签
        div.textContent = event.data;
        //3,把标签放到当前页面
        document.body.appendChild(div);
    }
    //4,当连接关闭后的提醒
    ws.onclose = function () {
    }
    //5,连接服务器发生错误的提醒
    ws.onerror = function () {
        alert('与服务器连接出错，请重试')
    }
}

var server=app.listen(8080);
