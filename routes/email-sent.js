var express = require('express');
var router = express.Router();
//var db = require('../database/db');


router.get('/', function(req, res, next) {
	res.render('email-sent');
});
module.exports = router;