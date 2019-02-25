exports.getIndex = function() {
  return -1;
}
var st = require('./sort.js');
var data = [23,24,2,342,4,324,3,12,1];
st.quickSort(data);
console.log(JSON.stringify(data));
