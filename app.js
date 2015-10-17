var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session'); 
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var editor = require('./routes/editor');
var collie = require('./routes/collie');
//var login = require('./routes/login');

var register = require('./routes/register');
var db = require('./database/db');
var config = require('./config');
var Lockit = require('lockit');
var lockit = new Lockit(config);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/editor', editor);
app.use('/users', users);
app.use('/collie', collie);
//app.use('/reg',register);
app.use(cookieSession({
  secret: 'my super secret String'
}));

app.use(lockit.router);

lockit.on('signup',function(user,res){
  console.log(user);
//  res.send('welcome');
});

// lockit.on('login', function(user, res, target) {
  
//   console.log('*****************88');  
// });

// lockit.on('logout', function(user, res) {
//   // ...
// });

// lockit.on('forgot::sent', function(user, res) {
//   // ...
// });

// lockit.on('forgot::success', function(user, res) {
//   // ...
// });

// lockit.on('delete', function(user, res) {
//   // ...
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//open database
// db.openDb(function(err,results){
//   if(err)
//   {
//     console.log("sorry,the number you dial is busy");
//   }
//   app.listen(8080);
// });

// var message={userName:'zhouhongqing',passWord:'091594'};
// db.writeDataToDb(message,function(err,results){
//   console.log('wogequ');
//   if(err)
//   {
//     console.log(err);
//     return;
//   }
//   console.log('write successfully!');
// });



module.exports = app;
