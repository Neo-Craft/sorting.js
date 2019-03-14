var assert = require('assert');
var klass = require('../sort.js');

describe('Log(n) sorting', function() {
  describe('#timSort()', function() {
      it('should sort a data set as expected', function() {
        var data = [23,24,2,342,4,324,3,12,1];
        klass.timSort(data);
        assert.deepEqual(data, [1,2,3,4,12,23,24,324,342]);

        data = [23,24,2,342,4,324,3,12,1];
        klass.timSort(data, 4); //different run
        assert.deepEqual(data, [1,2,3,4,12,23,24,324,342]);

        data = [4,8,8,41,54,415,45,85,4,845,4,15,8,4,1,54,2,6,23,5,4,9,8,1,52,1,2,3,3,56,544,5,6,5,48,9,5,44,8,56,4,8,9,7,85,52,2,2,1125,365,546,459,651,235,123];
        klass.timSort(data, 4); //different run
        assert.deepEqual(data, [1,1,1,2,2,2,2,3,3,4,4,4,4,4,4,5,5,5,5,6,6,7,8,8,8,8,8,8,9,9,9,15,23,41,44,45,48,52,52,54,54,56,56,85,85,123,235,365,415,459,544,546,651,845,1125]);
    });
  });
  describe('#timSort()', function() {
      it('should sort negative & repetitive values', function() {
        var data = [1,2,-1,-2,0,3,-0,2];
        klass.timSort(data);
        assert.deepEqual(data, [-2,-1,-0,0,1,2,2,3]);

        var neg_data = [2,0,-0,2];
        klass.timSort(neg_data);
        assert.deepEqual(neg_data, [-0,0,2,2]);


    });
  });

  describe('#timSort()', function() {
      it('should sort odd array size', function() {
        var neg_data = [2,2,-2];
        klass.timSort(neg_data);
        assert.deepEqual(neg_data, [-2,2,2]);
    });
  });
});
