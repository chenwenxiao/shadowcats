var config = require('./config');
var Lockit = require('lockit');
var lockit = new Lockit(config);
module.exports = lockit.router