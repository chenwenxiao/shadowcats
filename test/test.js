var assert = require('assert');
var add    = require('../public/javascripts/add.js');
var lockit = require('../models/lockit');


describe('add()', function() {
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
			hostname: '127.0.0.1',
			port: 3000,
			path: '/signup',
			method: 'POST',
			header:{
				'Content-Type': ''
			}
		};

		var request = http.request(option, function(response){
			/*var mongodb = require('mongodb');
			var Db = mongodb.Db;
			var Connection = mongodb.Connection;

			mongodb.open(function(err, db){
				db.collection('info', function(err, collection){
					collection.findOnd({name: 'mfhraven'}, function(err, doc){
						mongodb.close();
						if (doc){
							assert.equal(1, 1);
						}	
						else{
							assert.equal(0, 1);
						}
					});
				});
			});*/
			var adapter = require('lockit-mongodb-adapter');
			adapter.find('name', 'mfhraven', callback(err, user){
				if (user){
					assert.equal(1, 1);
				}else{
					assert.equal(0, 1);
				}
			});		
		});

		request.write(content);
		request.end();
	});
})
