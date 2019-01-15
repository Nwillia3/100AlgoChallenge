function allLongestStrings(inputArray: string[]): string[] {
  let largestString = 0;

  inputArray.forEach((word: string) => {
    largestString = largestString < word.length ? word.length : largestString;
  });

  let longestWords = inputArray.filter(
    (word: string) => largestString === word.length
  );
  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "raptor"]));

// first find the longest string length in the array
// then loop thru array to find the longest string
// with longeststring length filter into a new arr where the length of the words match the longeststring
