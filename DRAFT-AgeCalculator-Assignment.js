/* Age Calculator: Create a function to determine someone's age.
-Define a function called ageCalculator. This function should take 3 parameters:
1.) name – a string representing someone's name
2.) yearOfBirth – a number representing their year of birth
3.) currentYear – a number representing the current year

-using this info write a function called ageCalculator that determines someone's age, given their date of birth.
-The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, 
the return value should be as follows: "Suzie is 32 years old."
*/

function ageCalculator(name, yearOfBirth, currentYear) {

  let yearsOld = (currentYear - yearOfBirth);

  let functionResult = name + ' is ' + yearsOld + ' years old.'

  return functionResult
}
console.log(ageCalculator("Miranda", 1983, 2015));

/* PROCESS:
Start: [Line 20]
-

*/