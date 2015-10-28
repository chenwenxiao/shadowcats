var assert = require('assert');
var express = require('express');
var add    = require('../public/javascripts/add.js');
var lockit = require('../models/lockit');
var jsdom  = require('jsdom');
var adapter = require('lockit-mongodb-adapter');

describe('test_add()', function() {
  it('should return 2 when you pass it 1, 1', function() {
    assert.equal(add(1, 1), 2);
  });
});

describe('lockit', function(){
	it ('signup', function(){
		var http = require('http');
		var qs = require('querystring');
		var post_data = {
			name: 'mfhraven',
			email: 'mfhraven@126.com',
			password: 'ABCDabcd88'
		};

		var content = qs.stringify(post_data);

		var options = {
			hostname: '101.200.204.116',
			port: 3000,
			path: '/signup',
			method: 'POST',
			header:{
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': content.length
			}
		};

		var request = http.request(options, function(response){
			/*var adapter = require('lockit-mongodb-adapter');
			adapter.find('name', 'mfhraven', callback(err, user){
				if (user){
					assert.equal(1, 1);
				}else{
					assert.equal(0, 1);
				}
			});*/		
		});

		

		request.write(content);
		request.end();
		console.log(request);
	});
})
