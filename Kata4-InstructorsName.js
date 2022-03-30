/* ASSIGNMENT:
-Create a function named instructorWithLongestName that will receive an array of instructor objects, 
and return the object that has the longest name. 
-If there are two instructors with the longest name, return the first one.
*/

console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));

function instructorWithLongestName(instructorsArray) {
  let longestName = instructorsArray[0].name

  for (let i = 0; i < instructorsArray.length; i++) {

    if (instructorsArray[i].name.length > longestName.length) {
      longestName = instructorsArray[i];
    }
  }
  return longestName;
}

/* EXPLANATION:
-an array of objects with multiple properties per object is passed as the func argument for instructorWithLongestName
-a new var called longestName is created and stores the value of the func argument var at array index position 0 for parameter "name"

-we enter a for loop that cycles through the argument array: 
START: when i is equal to 0   ENDS: when i is less then argument array.length  ITERATES: by plus one each loop

for each successfull loop a conditional statement asks: 
-if the value of parameter name is a longer string then the current value of var longestName then longestName gets rewritten for the new longer string

-the resulting value of longestName is the func output

------------------------------------------------------
TAKEAWAYS:
-the core problem in this assignment came from not fully understanding how to access and target: 
1.) specific elements within an array via index position
2.) specific objects within an array
3.) specific properties and property values within an object
4.) specific properties and property values within an object that is stored within an array
*NOTE* check out HOWTO-return-elements,objects,indexpositions etc.js for examples of the above

-becuase of the above misunderstanding the original attempt was focused around trying to convert the array of objects into an array of elements 
this approach was more freindly to the knowledge base i was confident on however it made the code more convuluted and made it impossible to fill
the last assignment obligation (if 2 names are equal in length print the one that comes first)

*/
