/* ASSIGNMENT:
-Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.

STEPS:
  -create function with one argument
-find the two largest numbers in the array argument by using sort() to list them in descending order
-add those two numbers together by calling ther array index positions and adding them together with the + operator
-return sum of two numbers

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
*/

function sumLargestNumbers(array) {

  array.sort(function (a, b) { return b - a });

  return array[0] + array[1]

}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

/*
INPUT:
1.)  console.log(sumLargestNumbers([1, 10]));
2.)  console.log(sumLargestNumbers([1, 2, 3]));
3.)  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

EXPECTED OUPUT:
1.)  11
2.)  5
3.)  126

*/