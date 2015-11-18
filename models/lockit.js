var config = require('../config.js');
var cookieSession = require('cookie-session');
var Lockit = require('lockit');
var lockit = new Lockit(config);
var adapter = require('./mongodb.js')()

console.log(adapter);

//lockit模组的回调处理
module.exports = function(app){
	//会话设置
	app.use(cookieSession({
		secret: 'secret String'
	}));
	
	app.use(lockit.router);

	//当新用户注册激活成功时的回调函数
	lockit.on('signup', function(user, res){
		console.log(user);
		res.redirect('/bigmap');

		var new_usr = {
			name: user.name,
			nickname: user.name,
			email: user.email,
			process: 0,

			avater: "./public/images/fish.png"
		};
		//设置用户初始信息

		adapter.save(new_usr, function(err){
			if (err){
				console.log(err);
			}
		});
	});

	//用户登陆成功时用的回调函数
	lockit.on('login', function(user, res, target){
		res.redirect('/bigmap');
	});

	//用户成功登出时的回调函数
	lockit.on('logout', function(user, res){
		res.redirect('/');
	});
}
