var express = require('express');
var router = express.Router();

/* 获取地图信息 */
router.get('/', function(req, res, next){
	var map = require('../public/javascripts/mapInfo/' + req.query['stage']);
	map = JSON.stringify(map);

　　console.log("map : " + map);
	res.render('game', { title: 'stage', map : map});
})

module.exports = router;
