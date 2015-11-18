var express = require('express');
var router = express.Router();
var adapter = require('../models/mongodb.js')();
var agent = require('../models/MongoAgent.js');
var fs = require('fs');
var imageMagick = require('gm').subClass({ imageMagick: true} );
var multiparty = require('multiparty');
var path = require('path');

router.get('/avater', function(req, res, next){
	res.render('avater', {title: 'Express'});
});

//上传头像
router.post('/avater', function(req, res, next){
	//multiparty组件添加,指定下载目录
	var form = new multiparty.Form({uploadDir: './public/images/'});
	
	form.parse(req, function(err, fields, files) {
		var filesTmp = JSON.stringify(files, null, 2);

		if (err){
			console.log('parse error: ' + err);
		}else{
			console.log('parse files: ' + filesTmp);

			var inputFile = files.inputFile[0];
			var uploadedPath = inputFile.path;									//暂存目录
			var targetPath = './public/images/' + inputFile.originalFilename;	//目标目录

			console.log(uploadedPath);			
			console.log(targetPath);

			//移动图片目录
			fs.rename(uploadedPath, targetPath, function(err) {
				if (err){
					console.log('rename error: ' + err + ' uploadPath: ' + uploadedPath + ' targetPath: ' + targetPath);
				} else {
					console.log('rename ok');
				}

				//更新数据库
				adapter.find(req.session.email, function(err, result){
					if (err){
						console.log(err);
					}else{
						if (result == null){
							console.log('no such people');
						} else {
							var newInfo = result;
							newInfo['avater'] = targetPath;			//更改头像

							agent.saveAgent(newInfo);
						}
					}
				});

				res.redirect('/usrs');					//重定向回usrs界面
			});
		}
	});
})

//获取用户信息界面
router.get('/', function(req, res, next) {
	if (req.session.email == null){
		//未登录时访问
		res.redirect("/login");
	}else{
		//返回用户信息
		console.log(req.session.email);
		adapter.find(req.session.email, function(err, result){
			if (err){
				console.log(err);
			}else{
				//准备头像缩略图
				var toSendPath = 'images/' + req.session.email + '.jpg';
				console.log(toSendPath);
				
				//利用gm组件,讲头像原图放缩为头像大小
	            var gm = imageMagick(result['avater']);				
            	gm.resize(150, 150).autoOrient().write('./public/' + toSendPath, function(err){
					if (err){
						console.log('gm error: ' + err);
					}else{
						console.log('Please check the path: ./public/' + toSendPath);
					}
				});

				//发送用户信息
				if (result == null)	console.log('no such people');
				else				res.render('usrs', { title : 'User\'s infomation', info : result, avater: toSendPath });
			}
		});
	}
});

//用户信息更改
router.post('/', function(req, res){

	//获取新设置的用户信息
	var email = req.session.email;
	var name = req.session.name;
	var age = req.body.age;
	var sex = req.body.sex;
	var notice = req.body.notice;
	var nickname = req.body.nickname;
	var workPlace = req.body.workPlace;

	//更新用户信息
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

				//保存用户信息
				agent.saveAgent(newInfo);

				res.redirect('/usrs');
			}
		}
	});
});

module.exports = router;
