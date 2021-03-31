//merge function definition
function merge(array1, array2) {
  //declating result array to store concatenated array
  let result = [];

  //looping thru first array and pushing to result array
  array1.forEach(element => {
    result.push(element);
  });

  //looping thru second array and pushing to result array
  array2.forEach(element => {
    result.push(element);
  });

  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < result.length; i++) {
      if (result[i - 1] > result[i]) {
        done = false;
        var temp = result[i - 1];
        result[i - 1] = result[i];
        result[i] = temp;
      }
    }
  }

  //returning result array
  return result;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), '=?', [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), '=?', [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), '=?', [1, 2, 6]);
