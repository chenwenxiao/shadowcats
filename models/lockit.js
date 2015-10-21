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
		//req.session.user = user;
		//console.log(req.session.user);
		res.redirect('/bigmap');
	});

	lockit.on('login', function(user, res, target){
		res.redirect('/bigmap');
	});

	lockit.on('logout', function(user, res){
		res.redirect('/');
	});
}
