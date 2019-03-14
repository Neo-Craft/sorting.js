var st   = require('./sort.js');
var util = require('./utils.js');
var data = [23,24,2,342,4,324,3,12,1];

var hundreeds = Array.from({length: 2500}, () => Math.floor(Math.random() * 9500));
var iteration = 50;

console.log("\n====================QuickSort=====================");
util.bench(st.quickSort, iteration, [hundreeds.slice()], null);


console.log("\n\n====================MergeSort=====================");
util.bench(st.mergeSort, iteration, [hundreeds.slice()], null);


console.log("\n\n====================timSort=====================");
util.bench(st.timSort, iteration, [hundreeds.slice()], null);

console.log("\n\n====================BubbleSort=====================");
util.bench(st.bubbleSort, iteration, [hundreeds.slice()], null);

console.log("\n\n====================selectionSort=====================");
util.bench(st.selectionSort, iteration, [hundreeds.slice()], null);



/*
st.quickSort(data);
Mean execution time was:  0.1035946 ms
Sum execution time was:  0.517973 ms


*/
