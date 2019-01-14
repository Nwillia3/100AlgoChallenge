function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

// Absolute sum minimization means find the median number of the array

// to find the median value in an array you need to find the middle number by separating in two. If the length of the array is even than you want the value to the left of the array. But if the array length is odd you want to round the length of thre array down to as arrays start with zero and not 1
