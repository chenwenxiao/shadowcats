var express = require('express');
var router = express.Router();
var adapter = require('../models/mongodb.js')();

/* 获取地图信息 */
router.get('/', function(req, res, next){
	if (req.session.email == null){
		res.redirect('/login');
	}else{
		var map = require('../public/javascripts/mapInfo/' + req.query['stage']);
		map = JSON.stringify(map);

　　	console.log("map : " + map);
		res.render('game', { title: 'stage', map : map});
	}
})

router.post('/', function(req, res){
	var stage = req.query['stage'];
	var total = req.query['total'];
	console.log(stage + " " + total);
	adapter.find(req.email, function(err, result){
		if (err){
			console.log(err);
		}else{
			if (result == null){
				console.log("The user do not exist");
			}else{
				var newInfo = result;
				var record = newInfo.success['stage'];
				if (record == undefined || record > total)
					newInfo.success['stage'] = total;

				adapter.save(newInfo, function(err){
				});
			}
		}
	});	
})

module.exports = router;
