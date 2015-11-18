var MongoClient = require('mongodb').MongoClient;

//mongodb用户信息数据库的设置
var config = {
	url: 'mongodb://101.200.204.116/',
	name: 'usr',
	collection: 'personality'
}

//创建并初始化用户信息数据库
var PAdapter = module.exports = function(){
	if (!(this instanceof PAdapter)) { return new PAdapter(); }
	
	this.config = config;
	this.collection = config.collection;

	var url = config.url + config.name;

	var that = this;
	MongoClient.connect(url, function(err, database){
		if (err) {throw err; }
		that.db = database;	
	});
};

//数据库保存接口,参数为用户信息和回调函数
PAdapter.prototype.save = function(personality, callback){
	//console.log(personality);
	this.db.collection(this.collection).save(personality, function(saveErr){
		console.log(personality);
		callback(saveErr);
	});	
};


//数据库查询接口,参数email为查询关键字,callback为回调函数
PAdapter.prototype.find = function(email, callback){
	this.db.collection(this.collection).findOne({email: email}, function(err, doc){
		if (doc){
			callback(err, doc);
		}else{
			callback(err, null);
		}
	});	
};

//数据库移除接口,以email未关键字查询并删除,第二个参数为回调函数
PAdapter.prototype.remove = function(email, callback){
	this.db.collection(this.collection).remove({email: email}, function(err, result){
		if (err) {return callback(err, false)}
		if (result.result.n == 0){return callback(new Error('No Such User' + email), false)}
		//callback(err, result);
		callback(null, true);
	});
}
