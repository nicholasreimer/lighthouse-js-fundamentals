
function range(start, end, step) {

  let returnArray = [];

  if (start > end || step < 0 || start === undefined || end === undefined || step === undefined) {
    return returnArray;
  }

  for (let i = start; i <= end; i += step) {
    returnArray.push(i);
  }
  return returnArray;
}

console.log(range(10, 30, 5));

/*
EXPLANATION:
Start: 
-print to the console the output of the function range when 0, 10, 2 is passed as the arguments for start, step, end

Move Inisde Function:
-a new var named returnArray is created and becomes the future home of the function final output
-a single conditional statement asks if the values passed as arguments are:
"Is start greater then end? OR is step less then zero? OR is start, step, end directly equal to the value undefined? 
if yes return returnArray (which will be an empty [])

For Loop within the Function:
-for loop is made with a start position of i = var start, a stop point of when i is less then or equal to var end, 
i increaes by the value of step each loop.
-each successfulll loop push the value of i to the new returnArray

RESULT:
-return the value of returnArray

WHAT WE MISSED:
The Good: 
-absolutley nailed the skeleton of what needed to happen for the code to run as per instructions

The Bad:
-could have combvined all the conditionals into one single condtional statement
-got caught up with the specialized for each loop function where as sticking to a more simple function with a seperated for loop within would hav 
given you the breathing room u needed to put the different pieces together
-u gave up a little bit to quickly and wer to hesitant to experiment before going to the forum to seek answers

Summary:
-You need to slow down, break the problem into pieces and stick to what you know. Better to build somehting that works 
and slim it down then to force yourself to use a method ur less familiar with and get bogged down.
-Overall things are going great, keep at it and use this feedback to productively fuel the rest of the day/ weeeks learning.
-search other forum solutions to see if thers any examples of this being done with a for each function and then
write some notes explaing how it works so future nico can benefit 

*/

/* ASSIGNMENT:
-Define a function called range
-The function takes 3 numbers as its parameters: start, end, and step.
-The function should return an array of numbers from start to end counting by step.

Example:
code:           	  output:
range(0, 10, 2);	  [ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	  [ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	  [ -5, -2, 1 ]

start=0 step=2, functioin code= 4, 6, 8  end=10

The function should return an empty array [] if given incorrect parameters, such as:
-start, end, or step being undefined
-start being greater than end
-step being 0, or negative

Hint:
-At some point in your code, you may want to use some_array.push(some_value)
*/