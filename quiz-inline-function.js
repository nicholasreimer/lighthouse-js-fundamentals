/*
QUIZ INLINE FUNCTIONS:
-Call the emotions() function so that it prints the output you see below, 
but instead of passing the laugh() function as an argument, pass an inline function expression instead.
-you can use your laugh function from the previous quizzes

 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
*/

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions ("happy", function(num) {
  
  var sound = ""; 

  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  
  sound = sound +"!"; 
  return sound; 
});

/*
[line 17] 
-a function named emotions is called with 2 arguements: a string containg "happy" and an inline function with a variable named num as its arguement

[line 13 to 15]
-the emotions function has 2 parameters: 
1.)a variable named myString (which is now the argument "happy" from the first step)
2.)an inline function called myFunc (which is now myFunc(2) from the first step)
*NOTE* you can think of the inline function as a temporary placeholder
-the emotions function body runs a console.log statement that concatenates a series of elements together into one string. 
At this point it translates to: "I am happy," + " myfunc(2)"

[line 19 to 25]
-now we enter into the function body of the emotions function, a var named sound is set equal to an empty string (this will be reassigned shortly)
-a for loop that starts at 0 and ends when the var num, which has been assigned 2 from previous steps, is less then 2. the loop iterates by plus one each loop cycle
-each successful loop cycle reassigns/modifies the var sound by adding a "ha" this creates a growing string with each loop cycle
-once the loop has completed we jump outside the loop with our new string of "ha"'s and reassign the var sound one last time to add "!" 
onto the end of the string produced by the for loop.
-the string from the for loop which is stored in var sound is: "haha!" (ha + ha + !)

[Line 26]
-this line asks what is the output for var sound?

CODE OUTPUT: I am happy, haha!
*/