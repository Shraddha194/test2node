var db = require('../dbconnection');
var user = {
    loginUser: function (item,callback) {
        return db.query('SELECT * FROM user WHERE username = ? AND password = ?', [item.username, item.password], callback);
    } 
}
module.exports = user;