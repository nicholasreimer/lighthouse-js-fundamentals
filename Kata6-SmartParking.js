/* ASSIGNMENT:
-write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, 
or returns false if there is no available spot. 
-Our function receives an array of arrays representing parking spots, and a string with type of vehicle looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.
-Regular cars can only park in R spots.
-Small cars can park in R or S spots.
-Motorcycles can park in R, S, or M spots.

In the array of parking spots, spots are written in both lower-case and upper-case:
-An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

-Our function must return an array with the coordinates of the spot as an [X, Y] pair.
*/

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

function whereCanIPark(argumentArray, vehicle) {

  for (let row = 0; row < argumentArray.length; row++) {
    for (let col = 0; col < argumentArray[row].length; col++) {

      if ((vehicle === "regular") && (argumentArray[col][row] === "R")) {
        return [row, col];
      } else if ((vehicle === "small") && (argumentArray[col][row] === "R" || argumentArray[col][row] === "S")) {
        return [row, col];
      } else if ((vehicle === "motorcycle") && (argumentArray[col][row] === "R" || argumentArray[col][row] === "S" || argumentArray[col][row] === "M")) {
        return [row, col];
      }
    }
  } return false;
};

/* EXPLANATION:
-a function called whereCanIPark() takes two arguments: 
1.) a nested array that shows all the parking spots  
2.) a var that represents the type of car looking for a spot

-during each loop the following conditionals ask the value of argumentArray at the row and col index that the loop is on:
1.) if var vehicleType is directly equal to "regular" AND the value of argumentArray (at the row and col index that the loop is currently on) is directly 
equal to "R" then the function output is the row, col index positions of the argumentArray element that is being looped.
2.) if var vehicleType is directly equal to "small" AND argumentArray (at the row and col index that the loop is currently on) is directly equal 
to "S" then the function output is the row, col index positions of the argumentArray element that is being looped.
3.) if vehicleType is directly equal to "motorcycle" AND argumentArray (at the row and col index that the loop is currently on) is directly equal 
to "R" OR "S" OR '"M" then the function output is the row, col index positions of the argumentArray element that is being looped.

-if none of the above conditionals are true then exit the conditionals and enter back into the loop body
-loop body returns false
------------------------------------------------------------
TAKEAWAYS:
-when asking mulitple questions in a conditional and linking them with &&, each question must have seperate brackets:
SYNTAX ex: if((Question 1) && (Question2)) { conditional body }

-if using the JS logical OR (||) it happens inside of the conditional question
SYNTAX ex: if(Question 1 === x || Question 2 === x) { conditional body }
*/