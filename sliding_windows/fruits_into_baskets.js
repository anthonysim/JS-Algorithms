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
