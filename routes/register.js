var express = require('express');
var router = express.Router();

/* GET reg page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Editor' });
});

/* deal with post request*/
router.post('/',function(req,res){
   message = req.body;
   //res.render('index');
   res.end(JSON.stringify(message));
   console.log(message);
});

module.exports = router;
