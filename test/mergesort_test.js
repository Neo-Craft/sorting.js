var assert = require('assert');
var klass = require('../sort.js');

describe('Log(n) sorting', function() {
  describe('#mergeSort()', function() {
      it('should sort a data set as expected', function() {
        var data = [23,24,2,342,4,324,3,12,1];
        klass.mergeSort(data);
        assert.deepEqual(data, [1,2,3,4,12,23,24,324,342]);
    });
  });
  describe('#mergeSort()', function() {
      it('should sort negative & repetitive values', function() {
        var data = [1,2,-1,-2,0,3,-0,2];
        klass.mergeSort(data);
        assert.deepEqual(data, [-2,-1,-0,0,1,2,2,3]);

        var neg_data = [2,0,-0,2];
        klass.mergeSort(neg_data);
        assert.deepEqual(neg_data, [-0,0,2,2]);


    });
  });

  describe('#mergeSort()', function() {
      it('should sort odd array size', function() {
        var neg_data = [2,2,-2];
        klass.mergeSort(neg_data);
        assert.deepEqual(neg_data, [-2,2,2]);
    });
  });
});
