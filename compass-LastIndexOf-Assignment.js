/* ASSIGNMENT:
-When the function is given an array and a value, it should return the index of the last time the value 
occurs in the array. If the value never occurs, the function should return -1.
EX:
INPUT: lastIndexOf([ 0, 1, 4, 1, 2 ], 1);
OUTPUT: 3

STEPS:
-name a function with two parameters, 
1.) an array, 
2.) a value

-create a new var that will store the array index position of the function result

-house the function inside a conditional statement that checks IF the value the occurs inside of the array run function, ELSE return -1 to ndexValue

-create a for loop that: 
starts at the begining of the array
stops when i === indexValue
iterates to the next array item in the loop until stop condition is met
-for loop returns current index postions
*/

function lastIndexOf(array, argumentValue) {

  let indexValue = 69

  for (let i = 0; i === argumentValue; i++) {
    indexValue.push(i)
  }
  return indexValue
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));


