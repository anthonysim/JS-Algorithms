const insertionSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let position = i - 1;
    
    while (position >= 0) {
      if (arr[position] > temp) {
        arr[position + 1] = arr[position];
        position = position - 1;
        
      } else {
        break;
      }
       arr[position + 1] = temp;
    }
  }
  return arr;
}


console.log(insertionSort([5, 4, 3, 2, 1]));
