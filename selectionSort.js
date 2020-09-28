function selectionSort(array) {
  // iterates through the whole array.
  for(let i = 0; i < array.length; i++) {
    // places the indexed item i as the "min."
    var min = i;
    // iterates from index 1 till the end.
    for(let j = i + 1; j < array.length; j++) {
      // if the iterated j item is smaller than the current min.
      // j is placed as the new "min."
      if(array[j] < array[min]) {
        min = j;
      }
    }
    // if the current i index is not the current min index.
    // the numbers are swapped.
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  // sorted array is returned at the end. 
  return array;
}

console.log(selectionSort([5, 3, 6, 8, 1, 4]))
