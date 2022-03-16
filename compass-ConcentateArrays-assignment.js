/* Assignment:
Define a function that: when given two arrays, concatenate the arrays together.

For example:
INPUT:	                                   OUTPUT:
concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	       [ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	       [ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]);	               [ 9, 7, 2 ]
concat([ 5, 10 ], []);	                 [ 5, 10 ]

STEPS:
-for loop runs through array1 and adds the va;ie

*/

function concat(theArray1, theArray2) {

  var returnArray = [];

  returnArray = theArray1.concat(theArray2);

  return returnArray;
}
console.log(concat([1, 2, 3], [4, 5, 6]));