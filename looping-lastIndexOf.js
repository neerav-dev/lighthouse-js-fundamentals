/**
 * In this challenge, we will be building a function that determines 
 * the last index of an item in an array.
 */

//lastIndexOf function definition
function lastIndexOf(array, value) {
  //declare result variable to store result
  let result = -1;
  //using forEach loop as we have to scan each element in the array
  array.forEach(function(item, i) {
    //check if item equal to value, if true store the index to result
    if (item === value) {
      result = i;
    }
  });
  //return result variable
  return result;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);