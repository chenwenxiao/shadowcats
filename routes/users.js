var express = require('express');
var router = express.Router();
var adapter = require('../models/mongodb.js')();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
	console.log(req.session.email);
	adapter.find(req.session.email, function(err, res){
		if (err){
			console.log(err);
		}else{
			if (res == null)	console.log('no such people');
			else				render('usrs', { title : 'User\'s infomation', info : res });
		}
	});
});

router.post('/', function(req, res){
	var email = req.session.email;
	var name = req.session.name;
	var age = req.body.age;
	var sex = req.body.sex;
	var notice = req.body.notice;
	var nickname = req.body.nickname;
	var workPlace = req.body.workPlace;

	var newInfo = {
		name : name,
		email: email,
		nickname : nickname,
		age: age,
		sex: sex,
		notice: notice,
		workPlace: workPlace
	};	

	adapter.find(email, function(err, res){
		if (err){
			console.log(err)
		}else{
			if (res==null)	console.log('Something Wrong!');
			else{
				//render('success', { substance : 'success!' });
				adapter.save(newInfo, function(err){
					if (err){
						render('fail', { substance: 'fail! '});
					}else{
						render('success', { substance: 'success!' });
					}
				});
			}
		}
	});
});

module.exports = router;
