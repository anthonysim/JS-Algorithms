const max_sub_array_of_size_k = function(k, arr) {
  if (arr.length < k) {
    return null;
  }
  let currentTotal = 0;
  let max = 0; 
  let point = 0;

  for (let i = 0; i < arr.length; i++) {
    currentTotal += arr[i];

    if (i >= k - 1) {
      max = Math.max(max, currentTotal);
      currentTotal -= arr[point];
      point += 1;
    }
  }
  return max;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])); // 7
