var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

var editor = require('./editor');
var users = require('./users');
var collie = require('./collie');
var game = require('./game');

/* 路由 */

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index', { title: 'Express' });
	});

	app.use('/editor', editor);
	app.use('/usrs', users);
	app.use('/collie', collie);
	app.use('/game', game);
};

