var assert = require('assert');
var add    = require('../public/javascripts/add.js');

describe('test_add()', function() {
  it('should return 2 when you pass it 1, 1', function() {
    assert.equal(add(1, 1), 2);
  });
});
