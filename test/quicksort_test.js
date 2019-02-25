var assert = require('assert');
var st = require('../sort.js');

describe('Log(n) sorting', function() {
  describe('#quickSort()', function() {
      it('should sort a data set as expected', function() {
        var data = [23,24,2,342,4,324,3,12,1];
        st.quickSort(data);
        assert.deepEqual(data, [1,2,3,4,12,23,24,324,342]);
    });
  });
  describe('#quickSort()', function() {
      it('should sort negative & repetitive values', function() {
        var data = [1,2,-1,-2,0,3,-0,2];
        st.quickSort(data);
        assert.deepEqual(data, [-2,-1,-0,0,1,2,2,3]);

        var neg_data = [2,0,-0,2];
        st.quickSort(neg_data);
        assert.deepEqual(neg_data, [-0,0,2,2]);
    });
  });
});
