var adapter = require('./mongodb.js')();

saveAgent = function(personality){
	adapter.save(personality, function(err){
		if (err){
			console.log(err);
		}else{
			console.log("please check the database");
		}
	});
}

exports.saveAgent = saveAgent;
