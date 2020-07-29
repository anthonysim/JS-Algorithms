function swap(array, i, min) {
  let temp = array[i];
  array[i] = array[min];
  array[min] = temp;
}

function selectionSort(array, callback) {
  for(let i = 0; i < array.length; i++) {
    var min = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
    callback(array, i, min);
    }
  }
  return array;
}

console.log(selectionSort([5, 3, 6, 8, 1, 4], swap))
