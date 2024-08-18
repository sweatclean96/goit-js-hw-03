const filterArray = (numbers, value) => {
  let bigNumbers = [];
  for (number of numbers) {
    if (number > value) {
      bigNumbers.push(number);
    }
  }
  return bigNumbers;
};
console.log(filterArray([1, 2, 3, 4, 5], 3)); 
console.log(filterArray([1, 2, 3, 4, 5], 4)); 
console.log(filterArray([1, 2, 3, 4, 5], 5)); 
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
