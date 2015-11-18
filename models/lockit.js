var config = require('../config.js');
var cookieSession = require('cookie-session');
var Lockit = require('lockit');
var lockit = new Lockit(config);
var adapter = require('./mongodb.js')()

console.log(adapter);

module.exports = function(app){
	app.use(cookieSession({
		secret: 'secret String'
	}));
	
	app.use(lockit.router);
	lockit.on('signup', function(user, res){
		//req.session.user = user;
		console.log(user);
		res.redirect('/bigmap');

		var new_usr = {
			name: user.name,
			nickname: user.name,
			email: user.email,
			process: 0,
			//success: []

			avater: "./public/images/default.jpg"
		};

		adapter.save(new_usr, function(err){
			if (err){
				console.log(err);
			}
		});
	});

	lockit.on('login', function(user, res, target){
		//res.cookie(user.name, 'cookie', {httpOnly: false });
		res.redirect('/bigmap');
		//res.cookie(user.name, 'cookie', { httpOnly: false });
	});

	lockit.on('logout', function(user, res){
		//res.clearCookie(user.name, 'cookie', { httpOnly: false });
		res.redirect('/');
		//res.clearCookie(user.name, { httpOnly: false });
	});
}
