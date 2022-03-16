/*
Write a while loop that:

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number
*/

let start = 1
//a new re-assignable variable named start has been created and its value is eqaul to 1, this will be used as the starting point for the loop

while (start <= 20) {
  //while loop with a stop condition that will stop the while loop when start is less then or equal to 20
  if (start % 3 && start % 5 === 0) {
    console.log('JuliaJames');
    //conditional statement asks if start var is divisible by 3 AND 5, if TRUE print "JuliaJames"
    //*NOTE* This conditional comes first becuase if it came after any of the other conditionals it wouldnt get a chance to run. If Else statements run until they are true then stop.
    // by having it be first we guarantee that it will be run first and only discardd if not true
  } else if (start % 5 === 0) {
    console.log('James');
    //conditional statement akss if start is divisible by 3, if TRUE print "James"
  } else if (start % 3 === 0) {
    console.log('Julia');
    //conditional statement akss if start is divisible by 5, if TRUE print "Julia"
  } else {
    console.log(start)
    //else catch all statement is setup for the start var to print to console if known of the above conditionals equates to TRUE
  }
  start = start + 1;
  //the incrementor for the while loop will add 1 to the start var
  //*NOTE* it is outside of the brackets of the conditional statements but inside the while loop
}

