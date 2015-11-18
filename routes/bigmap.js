var express = require('express');
var router = express.Router();

//获取大地图界面
router.get('/', function(req, res, next) {
	if (req.session.email == null){		
		res.redirect("/please-login");			//未登录时跳转首页
	}
	else{
		console.log(req.session.email);
		console.log(res.locals.email);
  		res.render('bigmap', { title: 'Bigmap' });	//返回大地图
	}
});

module.exports = router;
