var express = require('express');
var router = express.Router();
//var db = require('../database/db');


router.get('/', function(req, res, next) {
  res.render('login', { title: 'Editor' });
});

// router.post('/',function(req,res){
//    message = req.body;
   

//   var userName = message.userName;

// //    db.writeDataToDb(message,function(err,results){
// //   if(err)
// //   {
// //     console.log(err);
// //     return;
// //   }
// //   console.log('write successfully!');
// // });
//    res.end(JSON.stringify(message));
//    console.log(message);
// });

module.exports = router;