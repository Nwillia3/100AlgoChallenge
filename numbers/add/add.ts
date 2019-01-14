function add(param1: number, param2: number): number {
  return param1 + param2;
}
console.log(add(1, 2));
console.log(add(3, 2));

function add2(...param1: number[]): number {
  let total = 0;
  // for(n of param1){
  //     total += n;
  // }

  // or you can use a forEach
  param1.forEach(n => (total += n));

  // or use a basic for loop

  // for(let n = 0; n <= param1.length; n++){
  //     total += n
  // }

  return total;
}

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));

// the rest operator thats the valur of param1 and turns it into an array
//Initialize a total var and set it to 0. Then loop thru param1 to add each value to total
