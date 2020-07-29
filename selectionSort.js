function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array, callback) {
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }

      callback(array, i, min);
  }
  return array;
}

console.log(selectionSort([5, 3, 6, 8, 1, 4], swap))
