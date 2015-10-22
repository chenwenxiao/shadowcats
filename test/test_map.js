var assert = require('assert');
var jsdom  = require('jsdom');

describe('test_map()', function() {
  it('should return item[0]', function() {
    jsdom.env(
    'http://localhoist:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log(window.$);
      assert.equal(2, 2);
    }); 
  });
});
