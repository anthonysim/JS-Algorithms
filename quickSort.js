function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}
