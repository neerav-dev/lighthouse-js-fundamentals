/**
 * We've sent out two researchers to determine, on a scale of 1-10, how much people like lighthouses and they are hitting the streets of Canada to find out what people think.
 * Both researchers have stored their numbers in array for each location. This means that we have two different arrays of data for every single location, but we only want a 
 * single array for each location. We're going to have to concatenate the arrays from both researchers into a single array.
 */

//concat function definition
function concat(array1, array2) {
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

  //returning result array
  return result;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);