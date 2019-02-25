var assert = require('assert');
var st = require('../index.js');

describe('Set', function() {
  describe('#getIndex()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(st.getIndex(), -1);
    });
  });
});
