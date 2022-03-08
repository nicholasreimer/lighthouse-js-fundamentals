/*
create a function called buildTriangle() that will accept an input (the triangle at its widest WIDTH) 
and will return the string representation of a triangle. 

We've given you one function makeLine() to start with. The function takes in a line length, 
and builds a line of asterisks and returns the line with a newline character.

You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. 
What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. 
Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. 
*/
function makeLine(length) {
  //function has been created and named makeLine, a variable named length is the functions single parameter 
  var line = "";
  //a variable named line has been created and set to a temporary value in the form of a empty string
  for (var j = 1; j <= length; j++) {
  //a for loop has been created inside the function, the start point for the loop is a variable named J and is equal to 1,
  //the stop point for the loop is when var J is less then or equal to the var length, the loop increments by 1 each loop
    line += "* "
  //at the conclusion of each loop var line adds a "* " to the ouput string
  }
  return line + "\n";
}

function buildTriangle(length) {

  var triangle = "";
//a var named traingle has been created and is equal to a temporary value represented as an empty string
  var lineNumber = 1;
//a var named lineNumber has been created and is equal to 1
  for(lineNumber=1; lineNumber<=length; lineNumber++){
//a for loop inisde of the buildTriangle function has a start point of Linenumber=1, 
//a stop point of when lineNumber becomes less or equal to the var length (the buildFunction parameter/arguement), the loop increments by one each loop
      triangle = triangle + makeLine(lineNumber);
//the var triangle equals the var triangle plus the makeLine(with a arguement of lineNumber)
  }
  return triangle;
}

console.log(buildTriangle(3));

  /*
BIG PICTURE:
-user inputs the number 3 as the arguement for the buildTraingle function, this is done inside of a console.log statement so that the result can be output
-3 becomes the arguement for the parameter Length, length now equals 3
-the for loop inside of the function buildTriangle starts at one and runs until it hits the newly assigned var length (which has been set to 3 in previous steps)
-when the loop runs it outputs the value of lineNumber and uses it as the arguement for a different function called makeLine
-this is all stored inside a variable called triangle where triangle equals triangle plus the makeLine function and lineNumber as the function arguement

-now we head over the makeLine function with our new arguement value
-a for loop inside the function outputs a string with a set number of asterixs, the numberof asterixs is determined by the var line. 
-At the end of each loops string of asterixs is a line break \n, this allows the next loops string of asterixs to be printed on a seperate line but withing the same growing string

*/
