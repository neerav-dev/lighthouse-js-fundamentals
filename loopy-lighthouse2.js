function loopyLighthouse(range, multiples, words) {
  //Loop thru 100 to 200 (inclusive)
  for (let index = range[0]; index <= range[1]; index++) {
    //If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
    if (index % multiples[0] === 0 && index % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } 
    //If the number is a multiple of 3, print the string "Loopy" instead of the number.
    else if (index % multiples[0] === 0) {
      console.log(words[0]);
    } 
    //If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
    else if (index % multiples[1] === 0) {
      console.log(words[1]);
    } else{
      console.log(index);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);