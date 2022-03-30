/* ASSIGNMENT:
-Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. 
-Given this condition, add up only the values which match that condition. 
-If no values match the condition, return 0.
-Use some sort of looping. Do Not use Array.prototype.filter()

STEPS:
-create function
-new var evenNumbers is declared and set equal to 0
-new var oddNumber is declared and set equal to 0

-a for loop cycles through the values array
-the body of the for loop checks if elements in the array is even, if even then add value of element to var evenTotal
if odd add value of element to var oddTotal

-conditional after for loop asks if condition directly equals even return evenNumbers else return oddNumbers

*/

const conditionalSum = function (values, condition) {
  let evenNumbers = 0
  let oddNumbers = 0

  for (i = 0; i < values.length; i++) { //for (let i = 0; i < amounts.length; i++) { total += amounts[i]; }

    if (values[i] % 2 === 0) {
      evenNumbers += values[i]
    }
    else {
      oddNumbers += values[i]
    }
  }
  if (condition === "even") {
    return evenNumbers
  } else {
    return oddNumbers
  }
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


/*
INPUT:
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

EXPECTED OUTPUT:
6
9
144
0
*/