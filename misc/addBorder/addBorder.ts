function addBorder(picture: string[]): any {
  //   const lengthWall = picture[0].length + 2;
  //   let wall = "";
  //   for (let i = 0; i < lengthWall; i++) {
  //     wall = wall.concat("*");
  //   }
  //   picture.unshift(wall)
  //   picture.push(wall)

  //   for (let i = 1; i < lengthWall -1; i++) {
  //    picture[i] = `*${picture[i]}*`
  //   }

  // now to refactor the code

  const wall = "*".repeat(picture[0].length + 2);

  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
  }

  picture.unshift(wall);
  picture.push(wall);

  return picture;
}

console.log(addBorder(["abc", "ded"]));

/// Solution talk thru
// You want the length of the item in the array plus 2 to add * at the beginning and end of each item.
//You can use the repeat method to duplicate the number of * youll need by the value set above
// you then want to add the wall variable to the end and beginning of the array using unshift and push
// to add * to the end and beginning of each item in the array you loop thru the array and added the * with concat
//then add the walls to the beginning and end
