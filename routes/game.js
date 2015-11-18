var express = require('express');
var router = express.Router();
var adapter = require('../models/mongodb.js')();
var agent = require('../models/MongoAgent.js');

/* 获取地图信息 */
router.get('/', function(req, res, next){
	if (req.session.email == null){
		res.redirect('/');				//未登录时跳转首页
	}else{
		var stage = req.query['stage'];	//获取用户希望进入的关卡
		adapter.find(req.session.email, function(err, result){
			if (result == null){
				console.log("The user do not exist");
				res.direct('/login');
			}else{
				var stage = req.query['stage'];
				stageIndex = parseInt(stage.slice(2));
				var process = result['process'];			//获取用户的游戏进度
			
				console.log(stageIndex);
				console.log(process);
				
				if (stageIndex > process + 1){				//判断该关卡是否已解锁
					//alert('关卡未解锁');
					//res.redirect('/login');
					res.send('关卡未解锁');
				}else{
					var map = require('../public/javascripts/mapInfo/' + req.query['stage']);		//发送地图信息
        			map = JSON.stringify(map);

　　    			console.log("map : " + map);
        			res.render('game', { title: 'stage', map : map});
				}
			}
		});
	}
})

//用户通关时更新用户信息
router.post('/', function(req, res){
	var stage = req.query['stage'];	//获取用户当前完成的关卡
	var total = req.query['total'];	//获取用户通关所用的总代码行数
	
	console.log(stage + " " + total);

	//更新用户的游戏进度与情况
	adapter.find(req.session.email, function(err, result){
		if (err){
			console.log(err);
		}else{
			if (result == null){
				console.log("The user do not exist");
			}else{
				var newInfo = result;									
			
				//判断是否是第一次通过该关卡
				stageIndex = parseInt(stage.slice(2));
				console.log(newInfo['process']);
				tmp = newInfo['process'];
				console.log(stageIndex);
				if (tmp == NaN || tmp == undefined || stageIndex > tmp){				
					newInfo['process'] = stageIndex;
					console.log(tmp == NaN);
					console.log(tmp == undefined);
					console.log(stageIndex > tmp);
					console.log(2 > 1);
				}

				//判断总行数是否大破纪录
				total = parseInt(total);
				tmp = newInfo[stage];
				if (tmp == undefined || tmp > total){
					newInfo[stage] = total;
				}

				agent.saveAgent(newInfo);
			}
		}
	});	
})

module.exports = router;
