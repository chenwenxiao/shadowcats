var config = require('./config');
var Lockit = require('lockit');
var lockit = new Lockit(config);
lockit.on('login', function(user, res) {
 // console.log('a new user signed up');
  res.redirect('/bigmap');   // set signup.handleResponse to 'false' for this to work
});
module.exports = lockit.router