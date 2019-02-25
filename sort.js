exports.quickSort = function(array) {
  return quickSort(array, 0, array.length - 1);
}

//Quicksort a based sorting algorithm  on the divide-and-conquer approach.
var quickSort = function(array, low, high){
  if (low < high){
    var pivot = partition(array, low, high);  //lookup the split position
    quickSort(array, low, pivot);
    quickSort(array, pivot + 1, high);
    //console.log("QuickSort " + array.slice(0, high - low + 1) + " low: " + low + " high: " + high + " pivot: " + pivot);
  }
};

//Partitions a subarray by Hoare’s algorithm, using the first element as a pivot
var partition = function(array, low, high){
  var temp = array[low];
  var i = low - 1; j = high + 1;

  while(true) {
    do
      i++;
    while(array[i] < temp)

    do {
      j--;
    } while(array[j] > temp)

    if(i >= j)
      return j;


    [array[i], array[j]] = [array[j], array[i]];   //undo last swap when i ≥ j
  }

}
