var express = require('express');
var router = express.Router();
var adapter = require('../models/mongodb.js')();
var agent = require('../models/MongoAgent.js');
var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true} );
var multiparty = require('multiparty');

router.get('/avater', function(req, res, next){
	//res.render('avater', {title: 'Express' });
	var filePath = req.query['avater'];
	fs.exists(filePath, function(exists) {
		if (!exists)
			console.log('avater do not exist');

		var gm = gm(filePath);

		gm.resize(150, 150).autoOrient().write('public/images/1.jpg', function(err){
			if (err){
				//console.log('gm error:' err);
				console.log('gm error: ' + err );
			} else {
				res.sendFile('public/images/1.jpg');
			}
		});
		

		/*gm.toBuffer(function(err, buffer) {
			if (err) 
				console.log('gm.toBuffer error!');

			res.set('Content-Type', contentTypes(exty))
		});*/
	});
});

//上传头像
router.post('/avater', function(req, res, next){
	var form = new multiparty.Form({uploadDir: './public/images/'});
	
	form.parse(req, function(err, fields, files) {
		var filesTmp = JSON.stringify(files, null, 2);

		if (err){
			console.log('parse error: ' + err);
		}else{
			console.log('parse files: ' + filesTmp);

			var inputFile = files.inputFile[0];
			var uploadedPath = inputFile.path;
			var targetPath = './public/images/' + inputFile.originalFilename;

			console.log(uploadedPath);			
			console.log(targetPath);

			fs.rename(uploadedPath, targetPath, function(err) {
				if (err){
					console.log('rename error: ' + err + ' uploadPath: ' + uploadedPath + ' targetPath: ' + targetPath);
				} else {
					console.log('rename ok');

					/*fs.unlink(uploadedPath, function(err){
						console.log('unlink error: the uploadPath is ' + uploadedPath);
					});*/
				}

				adapter.find(req.session.email, function(err, result){
					if (err){
						console.log(err);
					}else{
						if (result == null){
							console.log('no such people');
						} else {
							var newInfo = result;
							newInfo['avater'] = targetPath;

							agent.saveAgent(newInfo);
						}
					}
				});

				res.redirect('/usrs');
			});
		}
	});
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

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
				if (result == null)	console.log('no such people');
				else				res.render('usrs', { title : 'User\'s infomation', info : result });
			}
		});
	}
});

router.post('/', function(req, res){
	//console.log(req.body);
	//console.log('Here');

	//获取新设置的用户信息
	var email = req.session.email;
	var name = req.session.name;
	var age = req.body.age;
	var sex = req.body.sex;
	var notice = req.body.notice;
	var nickname = req.body.nickname;
	var workPlace = req.body.workPlace;

	//获取头像的临时路径并指定存放路径
	/*if (req.files){
		var tmp_path = req.files.thumbnail.path;
		var target_path = './public/images/' + req.files.thumbnail.name;
	}*/

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

				/*if (req.files){				
					console.log(tmp_path);
					console.log(target_path);
					//保存头像
					fs.rename(tmp_path, target_path, function(err){
						if (err){
							console.log('保存失败:' + tmp_path + ' to ' + target_path)					
						}

						//删除临时文件
						fs.unlink(tmp_path, function(){
							if (err){	
								console.log("临时文件删除失败:" + tmp_path);
							}
						});
					});
				}*/

				res.redirect('/usrs');
			}
		}
	});
});

module.exports = router;
