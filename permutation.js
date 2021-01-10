// permutations using Heap Algorithm.

let permutates = arr => {

  const output = [];

  const swapInPlace = (arr, indexA, indexB) => {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
    return arr
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.join(''));
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.split(''));
  return output;
};

console.log(permutates('abc'))
