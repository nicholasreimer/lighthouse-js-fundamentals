/* INSTRUCTIONS:
-Use the map() method to take the array of bill amounts shown below, and create a second array of numbers called totals that shows the bill 
amounts with a 15% tip added.

-var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
-Print out the new totals array using console.log.
TIP: Check out the toFixed() method for numbers to help with rounding the values to a maximum of 2 decimal places. Note, that the 
method returns a string to maintain the "fixed" format of the number. So, if you want to convert the string back to a number, you can 
cast it or convert it back to a number:
*/

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(element) {
  element *= 1.15;
  return Number(element.toFixed(2));
});

console.log(totals);


/*
STEPS:
-print to the console the value of var totals
-this sends us into the .map for loop function expression that has a single parameter of element as its argument.
*NOTE* we are sent here because the entire function expression is set equal to var totals at the begining of the function

-the loop takes each element in the array one index position at a time, starting at zero and adds 15% 
*NOTE* it does this by multiplying the elements by 1.15, this is the simplest and most direct way of accomplishing this. 

-return a number value using the js number() function with element.toFixed(2) as its argument. 
*NOTE* the .toFixed is a js-function method thatformats a number to a specified ammount of decimal points, in our case it 
stops them at 2 numbers after the decimal.

RESULT:
-a new array is printed to the console, each element has 15% added to its original element value
*/



