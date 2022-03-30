/* INSTRUCTIONS:
Instruction
-Create a function named repeatNumbers, The input data/argument for the function will be a two dimensional array (an array of arrays), 
where each sub-array will have two numeric values. For example: [[1, 2], [2, 3]]

-the function will return a string with each of the given values repeated the appropriate number of times, 
-if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function (data) {
  let output = [];

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i][1]; j++) {
      output.push(data[i][0]);                //UNFINISHED!!!
    }
  }

  return output.join(', ');
};

console.log(repeatNumbers([[1, 2], [2, 3]]));

/*
SOURCE: https://web-prep-help.lighthouselabs.ca/t/kata-repeating-numbers-help/7409/2

STEPS:
-a nested array containing two arrays with two elements per array is passed as the argument for the function
-a var named output is created and has an initial placeholder value of "0" (empty string)

-the main for loop of a nested for loop cycles through the elemenets of the main array with var i being ther index id (main array = 2 seperate sub arrays)
-the 2nd loop within the first cycles through the elements within the sub arrays (sub arrays each have 2 elements)

-!!! NEED TO EXPLAIN HOW THE NESTED FOR LOOP OUTPUTS THE PROPER NUMBER OF 1's and 2's, WHAT MECHANISM?PROCESS IN THE NESTED LOOP  CAUSES THIS!

-!!! NEED TO ADD IN SOMETHING THAT CHANGES THE OUTPUT TO THE PROPER FORMATTING

EXPECTED OUTPUT: 11, 222

TAKEAWAYS:
Different Ways of Explaingin This:   array[i][1]
-the 2nd element of each of the arrays within the main array 
-array[i] is the index value of the main array after being looped by the first loop in the function 
example: [[1,2], [3,4]] => i=0 would be [1,2] and i=1 would be [3,4] in this example

array[i][1] is the index value of the 2nd element inside each of the arrays within the main array.
-


Yurika Notes:
I try to simplify the problem - first look at the input and output, and just tackle the simplest output case first. 
console.log(repeatNumbers([[1, 10]]));
//this shoud give the following output
1111111111

-You can simplify it even more by setting the given input to be a single array [1, 10], instead of a nested array like in the example [[1, 10]]. 

-So after simplifying it to the simplest possible arrangement, I try to think of it from a logical perspective. 
-I need a function (apparently named repeatNumbers) that takes in an array as an argument, and prints the first index item of the array (1) 
and repeats it second index number of times (10)
-so my function would need to access these two array elements, and the rest is using different methods or loops.

-After being able to return 10 of 1s, I can try to tackle the original nested array case, and if I can do that, I can expand the functionality 
by tackling the next input/output case, where input example is array of 2 array sets, etc 
-In the end, everyone has a different way of approaching the problem, but I always find it helpful to start by simplifying to see what the core
 functionality of this function is (no pun intended lol) by just asking - at the end of the day, what am I putting in and what is it returning?
*/


