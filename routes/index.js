var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

var editor = require('./editor');
var users = require('./users');
var bigmap = require('./bigmap');
var game = require('./game');
var doc = require('./doc');
var please_login = require('./please-login');
var email_sent=require('./email-sent');

/* 首页路由及路由管理 */

module.exports = function(app){
	app.get('/', function(req, res){
		console.log(res.locals.email);
		res.render('index', { title: 'ShadowCats', email: res.locals.email });
	});

	//分配路由
	app.use('/editor', editor);	
	app.use('/usrs', users);
	app.use('/bigmap', bigmap);
	app.use('/game', game);
	app.use('/doc', doc);
	app.use('/please-login',please_login);
	app.use('/email-sent',email_sent);
};

