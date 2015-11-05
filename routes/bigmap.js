var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.email == null){
		res.redirect("/login");
	}
	else{
		console.log(req.session.email);
		console.log(res.locals.email);
  		res.render('bigmap', { title: 'Bigmap' });
	}
});

module.exports = router;
