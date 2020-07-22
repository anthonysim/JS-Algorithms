// function takes a list of arrays and the item to search for as arguments.
function binary_Search(list, item){
  // established the far left end and right end of the array.
  let left = 0
  let right = list.length - 1
  
  // keeps running until item is found while left or right is shrinking in half.
  while (left <= right) {
    // takes the left and right end divided by 2 to come up with the midpoint.
    // the mid position is used to "guess."
    let mid = Math.floor((left + right) / 2)
    guess = list[mid]

    // if the guess is right, it will return the position
    if (guess === item) {
      return mid
    }
    
    // if the guess is higher than the item, it will subtract 1 from mid and estabish the new right.
    if (guess > item) {
      right = mid - 1
    }
    
    // if the guess is lower than the item, it will subtract 1 from mid and estabish the new left.
    else {
      left = mid + 1
    }
  }
  // return message if nothing is found. 
  return "No numbers found!"
}


console.log(binarySearch([1, 3, 5, 7, 9], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
