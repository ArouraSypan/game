function userSql() {
    var connection;
    this.init = function () {
        var mysql = require('mysql');  //调用MySQL模块

        //1，创建一个connection
        connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: 'root',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'design'          //数据库里面的数据
        });
        //2,连接
        connection.connect();
    }
    //玩家登录
    this.login=function (name,call) {
        var userAddSql = "SELECT password,id FROM player WHERE name='"+name+"'";
        connection.query(userAddSql, function (err, result) {
            if (err) {
            }
            call(result)
        });
    }
    //得到玩家属性
    this.getUserAttr = function (id, call) {
        var userAddSql = 'SELECT * FROM attr WHERE id='+id+'';
        connection.query(userAddSql, function (err, result) {
            if (err) {
                return;
            }
            call(result);
        });
    }
//添加数据
    //1.玩家注册
    this.inserUserMusic = function ( name, password,call) {
        //1,编写sql语句
        var userAddSql = 'INSERT INTO player VALUES(?,?,?,?,?,?,?,?,?,?,?)';
        var userAddSql_Params = ['', name, password,1,1,0,100,100,20,10,1000];
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                return false;
            }
            call(result);
        });

    }
    //玩家修改密码
//     this.
// //1.用户收藏歌单
//     //this.inserUserList = function (id, userid, listid) {
//         //1,编写sql语句
//         var userAddSql = 'INSERT INTO playlist_collection VALUES(?,?,?)';
//         var userAddSql_Params = [id, userid, listid];
//         connection.query(userAddSql, userAddSql_Params, function (err, result) {
//             if (err) {
//                 return false;
//             }
//         });
//
//     }
//     //查询
//     //1.查询音乐
//     this.queryMusic = function (call) {
//
//         var sql = "select * from music";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[SELECT ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//     //查询用户已有歌曲ID
//     this.queryGetMusic = function (id,call) {
//
//         var sql = "select song_id from song_collection where song_user_id="+id;
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[SELECT ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//     this.queryAlbum = function (call) {
//         var sql = "select * from album";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[SELECT ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//     //4.查询歌曲所属的歌单
//     this.queryMusic_list = function (call) {
//         var sql = "select playlist.playlist_name from playlist,music,song_playlist where music.music_id=song_playlist.song_id and song_playlist.playlist_id=playlist.playlist_id";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[SELECT ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//     //用户查询收藏的歌单
//     this.queryUser_list = function (name, call) {
//         var sql = "select a.* from playlist a,playlist_collection,user b where  a.playlist_id=playlist_collection.playlist_id and b.user_id=playlist_collection.playlist_user_id and b.user_name=" + "'" + name + "'" + "";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[SELECT ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//     //用户查询收藏的歌曲
//     this.queryUser_music = function (name, call) {
//         var sql = "select a.* from music a,song_collection,user b where a.music_id=song_collection.song_id and b.user_id=song_collection.song_user_id and b.user_name=" + "'" + name + "'" + "";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[SELECT ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//
//
//     //用户删除收藏的歌单
//     this.delPlaylist = function (id, call) {
//         var sql = "delete from playlist_collection  where playlist_id=" + id + "";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[DELETE ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//     //删除用户的音乐
//     this.delUserMusic = function (userid,musicid, call) {
//
//         var sql = "delete from song_collection where song_collection.song_user_id=" + userid + " and song_collection.song_id="+musicid;
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[DELETE ERROR] - ', err.message);
//                 return;
//             }
//             call(result);
//         });
//
//     }
//     //用户删除收藏的音乐
//     this.delMusic = function (id, call) {
//         var sql = "delete from song_collection where song_id=" + id + "";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 console.log('[DELETE ERROR] - ', err.message);
//                 return;
//             }
//             call(result)
//         });
//
//     }

}
module.exports = userSql;