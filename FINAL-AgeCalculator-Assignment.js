/* Age Calculator: Create a function to determine someone's age.
-Define a function called ageCalculator. This function should take 3 parameters:
1.) name – a string representing someone's name
2.) yearOfBirth – a number representing their year of birth
3.) currentYear – a number representing the current year

-using this info write a function called ageCalculator that determines someone's age, given their date of birth.
-The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, 
the return value should be as follows: "Suzie is 32 years old."

function ageCalculator(name, yearOfBirth, currentYear) {
var age = currentYear - yearOfBirth;
return name + " is " + age + " years old. "
}

*/

function ageCalculator(name, yearOfBirth, currentYear) {

  let yearsOld = currentYear - yearOfBirth;

  return = name + ' is ' + yearsOld + ' years old.'
}

console.log(ageCalculator("Miranda", 1983, 2015));



/* PROCESS:
Start: 
-print to the console the result of the ageCalculator function when Miranda, 1983, 2015 is passed as its parameter arguments

Enter the Function: 
-a var named years old has been created and is equal to the result of the value of var currentYear minus the value of var yearOfBirth


Return: [Line 18]
-return is equal to a concentated string that combines the var name and the var yearsOld with small sections of string.
-print it to the console as per original request
*/