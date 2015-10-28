var assert = require('assert');
var jsdom  = require('jsdom');

describe('test_map()', function() {
  it('should return item[0]', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    }); 
  });
});
