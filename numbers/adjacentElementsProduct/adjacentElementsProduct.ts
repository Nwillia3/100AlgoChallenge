function adjacentElementsProduct(inputArray: number[]): any {
  let largestProduct = inputArray[0] * inputArray[1];

  for (let j = 0; j < inputArray.length - 1; j++) {
    const product = inputArray[j] * inputArray[j + 1];
    largestProduct = largestProduct < product ? product : largestProduct;
    // console.log(largestProduct)
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

// initiate the first value
// skip the first and last
// iterate thru the array set largestproduct to a value that greater than the current largestproduct
