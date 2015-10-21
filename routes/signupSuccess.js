var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var db = new mongodb.Db('mydb', server, {safe:true});

var token = null;
db.open(function(err,db){
	if(!err){
		console.log('connect');
		db.collection('users',function(err,collection){
			if(err){
				mongodb.close();
				return;
			}

			collection.find({})
		})
	}
});


router.get('/', function(req, res, next) {
  res.render('signup-success',{token:'123',title:'Welcome!'});
});

module.exports = router;