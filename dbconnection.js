var mysql=require('mysql');
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'test2'
});
module.exports=connection;