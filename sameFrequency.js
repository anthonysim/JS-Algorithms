function sameFrequency(num1, num2){
  let numStr1 = num1.toString();
  let numStr2 = num2.toString();
  
  if (numStr1.length !== numStr2.length) {
      return false;
  }
  
  for (let num of numStr1) {
      if (!numStr2.includes(num)) {
          return false;
      }
  }
  
  for (let num of numStr2) {
      if (!numStr1.includes(num)) {
          return false;
      }
  }
  return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
