function addTwoDigits(n: any): any {
  let nString = n.toString().split("");
  let total = 0;
  for (n of nString) total += parseInt(n);

  return total;
}

console.log(addTwoDigits(29));

// to add the individual digitals of a num convert the number into a string.
// split that string into a new array const
// loop thru array of string and parseInt each item and add it to a new assigned variable set to 0
