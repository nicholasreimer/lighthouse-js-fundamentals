const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

//anonymous function expression stored in a const var named finalPosition
const finalPosition = function (moves) {

//var grid houses the output of the function in an array
  let grid = [0,0];

//for loop: starts at 0, the loop stops when the total length of the moves array is reached
  for (let i = 0; i < moves.length; i++) {

//inside for loop is a series of conditional statements that checks each string listed in the array
//if the string is "north" then var grid array index position [1] increases by +1
//the rest of the conditionals work the same way with varying outcomes of either positive (+1) or negative (-1)
//on either index position [0] or [1] of the var grid array
    if (moves[i] === 'north') {
      grid[1] = grid[1] + 1;

    } else if (moves[i] === 'south') {
      grid[1] = grid[1] - 1;

    } else if (moves[i] === 'east') {
      grid[0] = grid[0] + 1;

    } else if (moves[i] === 'west') {
      grid[0] = grid[0] - 1;
    }
  }
  //return var grid as the output of the function
  //NOTE: we are outside of the for loop but inside of the function
  return grid;
};
//log to the console the outcome of function finalPosition when var moves is used as its arguement
console.log(finalPosition(moves));

/*
STEPS:
Start: [Line 34]
-console.log wants to log to the console the outcome of function finalPosition when var moves is used as its arguement

Enter the Function; [Line 4]
-anonymous function expression stored in a const var named finalPosition has an array housed in a var named moves as its arguement
-a variable named grid has been created globally within the function that is equal to an empty array, the functions final output will end up here

For Loop within the Function Runs a Series of Conditional Statements on the Array: [Line 10]
-a for loop starts at array index position 0, the loop stops when the total length of the array is reached, the loop iterates by plus 1 each loop cycle
-inside for loop is a series of conditional statements that checks each string listed in the array:
if the string is "north" then var grid array index position [1] increases by +1
-the rest of the conditionals work the same way with varying outcomes of either positive (+1) or negative (-1) on either 
index position [0] or [1] of the var grid array.

*Dumbed Down Explanation of Above*
-each time the loop runs it reassigns the array objects stored in var grid by changing the array objects by +1 or -1

Return var grid: [Line 31]
-return var grid as the output of the function and send it to the console as per original console.log
*/

