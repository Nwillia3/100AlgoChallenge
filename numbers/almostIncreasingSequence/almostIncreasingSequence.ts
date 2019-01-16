function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] < sequence[i - 1]) {
      // if the second value is less than the first value add 1 to the count
      count++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1] ) {
          //if the current value is <= two values back && one value ahead and one valuye back <= to each other this sequence falses the conditiing twice thus return false 
        return false;

      }
      
    }
  }

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3]);
console.log(almostIncreasingSequence([1, 3, 2]));

// create an count variable that counts how many variables are out of order
