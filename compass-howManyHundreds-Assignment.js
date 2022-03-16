/* ASSIGNMENT:
-Each container on the space ship can hold exactly 100 bottles of maple syrup. A container will only be sent if it's full.

-Given a certain number of bottles, we need to determine how many containers can be filled and sent. In this challenge, 
we will write a function that determines how many hundreds can be made from a number.

-When this function is given a number, it should return how many hundreds fit into that number.

PLAN:
-define a function called howManyHundreds and set a var named num as its parameter
-within the function write a conditional statement that uses the modulo operator to see if a number is divisible by 100, 
-if the num argumanet is divisible by 100 save the number of hundreds its divisible by to a new var named numberOfContainers
-return var numberOfContainers
*/

function howManyHundreds(num) {

  let numberOfContainers = Math.floor(num / 100)

  return numberOfContainers
}

console.log(howManyHundreds(520))


/*
EXPLANATION OF FUNCTION BODY:
//var quotient = Math.floor(y/x);
//var remainder = y % x;

//number of bottles brought to be shipped
let y = 10000

//the ammount of bottles that fit in one container
let x = 10

//numberOfContainers = the quotient which equals the ammount of successfull division of x into y
var numberOfContainers = Math.floor(y/x);

//leftOverBottles = the remainer which is the remainder of bottles left over after x is divided into y
var leftOverBottles = y % x;

console.log(numberOfContainers)
*/