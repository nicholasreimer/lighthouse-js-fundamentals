/* ORIGINAL VERSION:

const isEven  = function(num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
*/


//SIMPLIFIED VERSION:
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

/*
Process of Simplified Version:
[START is at Line 19]
-console log contains a function called isEven with an argument of 10
-this sends us to line 15 where isEven is a const var that stores a 
function
 -we input our arguement of 10 and are returned a true value
 -now we go back to the console.log statement from line 19 and print TRUE

 -2nd console log statement goes through the same process but outputs FALSE
-this is due to num var NOT being directly equal to 0

Notes on the difference between Simplified and Original:
-console.log is itself a function (its predefined by JS) we can use it
without having to declare it ourselves. 
-the simplified version puts the isEven function inside the console.log
allowing us to skip the var assignment in the original version
*/