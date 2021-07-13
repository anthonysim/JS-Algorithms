// Given an array of characters where each character represents a fruit tree, you are given two baskets, 
// and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, 
// i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.


const fruits_into_baskets = function(fruits) {
  let fruitFreq = {};
  let max = 0;
  let point = 0;

  for (let i = 0; i < fruits.length; i++) {
    let right = fruits[i];

    if (!(right in fruitFreq)) {
      fruitFreq[right] = 0;
    }
    fruitFreq[right] += 1;

    while(Object.keys(fruitFreq).length > 2) {
      let left = fruits[point];
      fruitFreq[left] -= 1;

      if (fruitFreq[left] === 0) {
        delete fruitFreq[left];
      }
      point += 1;
    }
    max = Math.max(max, i - point + 1);
  }
  return max;
};


console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])); // 5
