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

/* 路由 */

module.exports = function(app){
	app.get('/', function(req, res){
		console.log(res.locals.email);
		res.render('index', { title: 'ShadowCats', email: res.locals.email });
	});

	app.use('/editor', editor);
	app.use('/usrs', users);
	app.use('/bigmap', bigmap);
	app.use('/game', game);
	app.use('/doc', doc);
	app.use('/please-login',please_login);
};

