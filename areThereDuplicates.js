function areThereDuplicates(...args) {
  const arr = args;
  const obj = {};

  for (let item of arr) {
    !obj[item] ? obj[item] = 1 : obj[item] += 1;

    if (obj[item] > 1) {
      return true;
    }  
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3) // false
console.log(areThereDuplicates('a', 'b', 'c', 'a') // true
