exports.mongoose = null;
exports.db = null;

var config = require('./db_config');
var databaseName = config.databseName;
var host = config.host;

exports.openDb = function(callback)
{
    mongoose = require('mongoose');
    db =mongoose.createConnection(host,databaseName);
    db.on('error',console.error.bind(console,'连接错误:'));
    callback();
    
}
exports.writeDataToDb=function(userMessage,callback)
{
   var userSchema = new mongoose.Schema({
	userName:String,
	passWord:String
   });
    
   var userModel = db.model('User',userSchema);
   var userEntity = new userModel(userMessage);
   userEntity.save();
   callback();
}
