var assert = require('assert');
var jsdom  = require('jsdom');

describe('test_add()', function() {
  jsdom.env(function() {
    'game?stage=1-1',
    [],
    function(err, window) {
        assert.equal(add(1, 1), 2);
      it('should return item[0]', function() {
      });
    }
  });
});
