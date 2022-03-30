/*  ASSIGNMENT:
-Create a function named urlEncode that will receive a string of words, 
-and return that string with all of the whitespace characters converted to %20. 

-If there is whitespace on the outside of the string, you should only replace the whitespace within the string.
EXAMPLE: console.log(urlEncode(" Lighthouse Labs ")); = Lighthouse%20Labs

STEPS:
-create function with one parameter/argument var
-create var newString to hold the output of the function

-run varstring through trim() to remove white space at front and back of string value

-for loop cycles through each individual index of var string
-if its a blank space the value of newString += %20 else the value of newString += var string at the index position of the loop cycle

-return the value of newString
*/
console.log(urlEncode(" blue is greener than purple for sure "));

function urlEncode(string) {
  let newString = ""

  string = string.trim();

  for (let i = 0; i < string.length; i++) {

    if (string[i] === " ") {
      newString += '%20'
    } else {
      newString += string[i]
    }
  }
  return newString
}

/*  
INPUT:
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

OUTPUT:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure

TAKEAWAYS:
-i tried to use .push() to push the for loop string output to the newString var. You cant push strings to a var holding a string value using .push(), 
its only for pushing array elements to an array. The correct method was to simply do: newString += "value". 

-the .trim() method was the most important key to making thecode clean and efficient, without it ther was gunna be an enitre other for loop and a 
bunch more conditionals to cover edge cases of both space before and after leters start in the argument string

*/