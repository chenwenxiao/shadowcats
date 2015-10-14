exports.mongoose = null;
exports.db = null;
var databaseName = 
exports.openDb = function(callback)
{
    mongoose = require('mongoose');
    db =mongoose.createConnection('localhost','test');
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
