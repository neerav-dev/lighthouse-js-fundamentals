//function to calculate area of rectangle
const calculateRectangleArea = function (length, width) {
  //check of negetive value and return undefined if true else the calculated area
  return length < 0 || width < 0 ? undefined : length * width;
}

//function to calculate area of triangle
const calculateTriangleArea = function (base, height) {
  //check of negetive value and return undefined if true else the calculated area
  return base < 0 || height < 0 ? undefined : base * height / 2;
}

//function to calculate area of circle
const calculateCircleArea = function (radius) {
  //check of negetive value and return undefined if true else the calculated area
  return radius < 0 ? undefined : Math.PI * (radius * radius);
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined