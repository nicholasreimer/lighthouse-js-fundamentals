/*
Write an anonymous function expression that stores a function in a variable called "laugh" 
and outputs the number of "ha"s that you pass in as an argument.
*/

let laugh = function(num){
  let x =1;
  let laughmessage = ""
  for(x=1; x <=num; x++){
    laughmessage += "ha ";
  }
  laughmessage += "!";
  return laughmessage;
  }

  console.log(laugh(3));

/*
-anonymus function is assigned to var named laugh, 
the function has a single paramter called num which will represent the number of ha's that get printed
-a for loop inside of the function that starts at 1 and ends at the arguement of the function and increments by one each loop 
-the body of the function has a script that returns a "ha" for each loop that gets added together to be one long string.
-when the loop is finsihed you get spit out and a "!" is added to the end of the string of "ha's"
-return laughmessage gives you your custom string, yeet yeet

Process:
laugh(3);
Returns: hahaha!
*/
