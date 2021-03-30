function range(start, end, step) {
  let result = [];

  if (start === undefined || end === undefined || step === undefined) {
    return result;
  } else if (start > end) {
    return result;
  } else if (step <= 0) {
    return result;
  } else {
    for (let index = start; index <= end; index+=step) {
      result.push(index);
    }      
  }
  return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range(0, 8, 2)); 
console.log(range(-9, 3, 3));

console.log(range(10, undefined, undefined));
console.log(range(5, 2, 3));
console.log(range(10, 20, 0));