exports.quickSort = function(array) {
  return quickSort(array, 0, array.length - 1);
}

exports.mergeSort = function(array) {
  return mergeSort(array, 0, array.length - 1);
}

exports.timSort = function(array, run = 2) {
  return timSort(array, run);
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

//Mergesort another based sorting algorithm on the divide-and-conquer approach.
var mergeSort = function(array, low, high){
  if (low < high){
    var middle = low + Math.floor((high - low) / 2);
    mergeSort(array, low, middle);                //sort first half
    mergeSort(array, middle + 1, high);           //sort second half

    mergeSortedArrays(array, low, middle, high);
  }
};


var mergeSortedArrays = function(array, low, middle, high){
  if (low >= array.length || high >= array.length){
    return;
  }
  //Pivot for Partition
  var left = low, right = middle + 1;
  var temp = [];

  while (left <= middle && right <= high){
    if (array[left] < array[right]){
      temp.push(array[left++]);
    }
    else if (array[left] > array[right]){
      temp.push(array[right++]);
    }
    else {
      temp.push(array[left++]);
      temp.push(array[right++]);
    }
  }

  while (left <= middle){
    temp.push(array[left++]);
  }

  while (right <= high){
    temp.push(array[right++]);
  }

  for(var i = low; i <= high; i++){
    array[i] = temp[i - low];
  }
}


//TimeSort, another based sorting algorithm on the divide-and-conquer approach.
//For this algorithm we will divide the array into x subarrays, sort each subarray then use the previous mergeSortedArrays() function to merge subarrays
var timSort = function(array, run){
  for(var i = 0; i < array.length; i += run){
    insertionSort(array, i, Math.min(array.length - 1, i + run));      //if array size doesn't divide run evenly then takes last parameters
  }
  var bound = run;
  while(bound < array.length){
    for(var left = 0; left < array.length; left += 2*bound){
      //starting point of sub array
      var mid = left + bound - 1;
      //ending point of left sub array
      var right = Math.min((left + 2*bound - 1), (array.length - 1));
      //merge arr[left.....mid] & arr[mid+1....right]
      mergeSortedArrays(array, left, mid, right);
    }

    bound *= 2;
  }
};

//an O(n^2) sorting algoritim used in the divide-and-conquer approach
var insertionSort = function(array, low, high){
  if (low >= array.length || high >= array.length){
    return;
  }

  for(var index = 1; index <= high; index++){
    var temp = array[index];
    var index2 = index - 1;
    for(; index2 >= 0 && array[index2] > temp; index2--){
        array[index2 + 1] = array[index2];
    }
    array[index2 + 1] = temp;
  }
}

//An O(n^2) sorting algorithm that repeatedly steps through the list
exports.bubbleSort = function(array){
    for(var indx = 0; indx < array.length - 1; indx++){
      for(var indx2 = 0; indx2 < array.length - 1 - indx; indx2++){
        if (array[indx2] > array[indx2 + 1]){
          [array[indx2 + 1], array[indx2]] = [array[indx2], array[indx2 + 1]];
        }
      }
    }

    return array;
}

//An O(n^2) sorting algorithm that is advantageous where auxiliary memory is limited
exports.selectionSort = function(array){
    if (array.size < 2){
      return array;
    }

    for(var indx = 0; indx < array.length - 1; indx++){
      var minIndx = indx;

      for(var indx2 = indx + 1; indx2 < array.length; indx2++){
        if (array[minIndx] > array[indx2]){
          minIndx = indx2;
        }
      }

      [array[indx], array[minIndx]] = [array[minIndx], array[indx]];
    }

    return array;
}
