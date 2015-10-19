var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index', { title: 'Express' });
	// get Big Map;
	//req.redirect('/');
})

//var map = require('../mapInfo/1-1.js');
//map = {titile : '1-1', map};
//map =JSON.stringify(map);
//console.log(map);
//map = JSON.parse(map);
//console.log(JSON.stringify(map));

/* 获取地图信息 */
router.get('/1-1', function(req, res, next){
	var map = require('../mapInfo/1-1');
	//console.log({ title: '1-1', map});
	//map = JSON.stringify(map);
	//console.log(map);
	res.render('game', { title: '1-1', map });	
})

//router.get('/1-1/image/:id', function(req, res, next){
//	console.log(req.params);
//	
//});

module.exports = router;
