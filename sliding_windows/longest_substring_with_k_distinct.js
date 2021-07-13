const longest_substring_with_k_distinct = (str, k) => {
  let charFreq = {};
  let point = 0;
  let longest = 0;
  
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (!(currentChar in charFreq)) {
      charFreq[currentChar] = 0;
    }
    charFreq[currentChar] += 1;

    while(Object.keys(charFreq).length > k) {
      charFreq[currentChar] -= 1;

      if (charFreq[currentChar] === 0) {
        delete charFreq[currentChar];
      }
      point += 1;
    }
   longest = Math.max(longest, i - point + 1);
  }
  return longest;
};

console.log(longest_substring_with_k_distinct("araaci", 2));
