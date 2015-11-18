var express = require('express');
var router = express.Router();
var adapter = require('../models/mongodb.js')();
var agent = require('../models/MongoAgent.js');

/* 获取地图信息 */
router.get('/', function(req, res, next){
	if (req.session.email == null){
		res.redirect('/login');
	}else{
		var stage = req.query['stage'];
		adapter.find(req.session.email, function(err, result){
			if (result == null){
				console.log("The user do not exist");
				res.direct('/login');
			}else{
				var stage = req.query['stage'];
				stageIndex = parseInt(stage.slice(2));
				var process = result['process'];
			
				console.log(stageIndex);
				console.log(process);
				
				if (stageIndex > process + 1){
					//alert('关卡未解锁');
					//res.redirect('/login');
					res.send('关卡未解锁');
				}else{
					var map = require('../public/javascripts/mapInfo/' + req.query['stage']);
        			map = JSON.stringify(map);

　　    			console.log("map : " + map);
        			res.render('game', { title: 'stage', map : map});
				}
			}
		})

		//var map = require('../public/javascripts/mapInfo/' + req.query['stage']);
		//map = JSON.stringify(map);

　　	//console.log("map : " + map);
		//res.render('game', { title: 'stage', map : map});
	}
})

router.post('/', function(req, res){
	var stage = req.query['stage'];
	var total = req.query['total'];
	
	console.log(stage + " " + total);

	adapter.find(req.session.email, function(err, result){
		if (err){
			console.log(err);
		}else{
			if (result == null){
				console.log("The user do not exist");
			}else{
				var newInfo = result;
				//var tmp = newInfo.success;
				//console.log(tmp);
				//tmp[stage] = total;
				//console.log(tmp);
				//console.log(newInfo.success);
				//var record = newInfo.success[stage];
				//console.log(record);
				//if (record == undefined || record > total)
					//newInfo['success'].append({stage: total});
					//newInfo['success'] = tmp;
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

				total = parseInt(total);
				tmp = newInfo[stage];
				if (tmp == undefined || tmp > total){
					newInfo[stage] = total;
				}

				agent.saveAgent(newInfo);
				//console.log(newInfo);
				//adapter.save(newInfo, function(error){
					/*if (error){
						console.log(error);
					}*/
				//	console.log(error);
				//});

				//adapter.save({"name": "test", "process": "2-1", "success": ["2-1", 3]}, function(error){
				//	console.log("please check the database");
				//});
			}
		}
	});	
})

module.exports = router;
