var config = require('../config.js');
var cookieSession = require('cookie-session');
var Lockit = require('lockit');
var lockit = new Lockit(config);

module.exports = function(app){
	app.use(cookieSession({
		secret: 'secret String'
	}));
	
	app.use(lockit.router);
	lockit.on('signup', function(user, res){
		req.session.user = user;
		req.flash('success', "注册成功")
	});
}
