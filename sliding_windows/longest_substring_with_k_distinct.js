const longest_substring_with_k_distinct = (str, k) => {
  let charFreq = {};
  let point = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let right = str[i];

    if (!(right in charFreq)) {
      charFreq[right] = 0;
    }
    charFreq[right] += 1;

    while (Object.keys(charFreq).length > k) {
      let left = str[point];
      charFreq[left] -= 1;

      if (charFreq[left] === 0) {
        delete charFreq[left];
      }
      point += 1;
    }
    longest = Math.max(longest, i - point + 1);
  }
  return longest;
};

console.log(longest_substring_with_k_distinct("araaci", 2)); // 4
