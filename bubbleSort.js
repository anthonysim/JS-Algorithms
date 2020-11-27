// Goal: make an unassorted array, sorted.

// O: a sorted array
// I: an unsorted array
// C: none
// E: empty array, an array with one num

var bubbleSort = function(arr) {
    if (arr === [] || arr.length === 1) {
      return arr;
  }

    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = true;

        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                
                swapped = false;
            }
            
          if (swapped) {
            return arr;
          }
        }      
    }
    return arr;
};

// Test Cases
console.log(bubbleSort([1, 2, 3, 4]))
console.log(bubbleSort([2, 1, 3])); // yields [1, 2, 3]
console.log(bubbleSort([ -10, -10.1, 2, 4, 20, 299 ]));

