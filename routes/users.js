var express = require('express');
var router = express.Router();
var adapter = require('../models/mongodb.js')();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
	if (req.session.email == null){
		res.redirect("/login");
	}else{
		console.log(req.session.email);
		adapter.find(req.session.email, function(err, result){
			if (err){
				console.log(err);
			}else{
				if (result == null)	console.log('no such people');
				else				res.render('usrs', { title : 'User\'s infomation', info : result });
			}
		});
	}
});

router.post('/', function(req, res){
	console.log(req.body);
	console.log('Here');
	var email = req.session.email;
	var name = req.session.name;
	var age = req.body.age;
	var sex = req.body.sex;
	var notice = req.body.notice;
	var nickname = req.body.nickname;
	var workPlace = req.body.workPlace;

	/*var newInfo = {
		name : name,
		email: email,
		nickname : nickname,
		age: age,
		sex: sex,
		notice: notice,
		workPlace: workPlace
	};*/
	//res.redirect('/usrs');

	adapter.find(email, function(err, result){
		if (err){
			console.log(err);
			//res.redirect('/error');
		}else{
			if (result == null){
				console.log('Something Wrong!');
			}else{
				var newInfo = result;
				if (nickname != undefined)	newInfo['nickname'] = nickname;
				if (age != undefined)		newInfo['age'] = age;
				if (sex != undefined)		newInfo['sex'] = sex;
				if (notice != undefined)	newInfo['notice'] = notice;
				if (workPlace != undefined)	newInfo['workPlace'] = workPlace; 
				//render('success', { substance : 'success!' });
				adapter.save(newInfo, function(err){
					/*if (err){
						render('fail', { substance: 'fail! '});
					}else{
						render('success', { substance: 'success!' });
					}*/
					if (err){
						console.log(err);
					}else{
						res.redirect('/usrs');
					}
				});
			}
		}
	});
});

module.exports = router;
