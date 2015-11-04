var MongoClient = require('mongodb').MongoClient;

var config = {
	url: 'mongodb://101.200.204.116/',
	name: 'usr',
	collection: 'personality'
}

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

PAdapter.prototype.save = function(personality, callback){
	this.db.collection(this.collection).save(personality, function(saveErr){
		callback(saveErr);
	});	
};

PAdapter.prototype.find = function(email, callback){
	this.db.collection(this.collection).findOne({email: email}, function(err, doc){
		if (doc){
			callback(err, doc);
		}else{
			callback(err, null);
		}
	});	
};

PAdapter.prototype.remove = function(email, callback){
	this.db.collection(this.collection).remove({email: email}, function(err, result){
		if (err) {return callback(err, false)}
		if (result.result.n == 0){return callback(new Error('No Such User' + email), false)}
		//callback(err, result);
		callback(null, true);
	});
}
