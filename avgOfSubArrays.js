function avgOfSubArrays(K, arr) {
  
  const result = [];
  let windowSum = 0;
  let windowStart = 0;
  
  // loop through the entire array.
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // running total of elements
    windowSum += arr[windowEnd]; 
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      // calculate the average
      result.push(windowSum / K); 
      // subtract the element going out
      windowSum -= arr[windowStart]; 
      // slide the window ahead
      windowStart += 1; 
    }
  }
  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
