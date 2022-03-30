/* ASSIGNMENT:
-complete a function called smartGarbage(trash, bins), which will be responsible for increasing the garbage count for waste, recycling, or 
compost depending on what trash is submitted.

Function will receive two arguments:
1.) The first argument, trash, is a string that will tell our function what type of item is being submitted.
2.)The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. 

Our function must increase the correct value in the bins object, and then return the newly updated object.
*/

function smartGarbage(trash, bins) {

  if (trash === "recycling") {
    bins.recycling += 1;

  } if (trash === "waste") {
    bins.waste += 1;

  } if (trash === "compost") {
    bins.compost += 1;
  }
  return bins;
}

smartGarbage('recycling', {
  waste: 4,
  recycling: 2,
  compost: 5
});

/*
EXPLANATION:
-a function named smartGarbage is called with a string "recycling" as argument 1 and a an object with three parameters equal to numbers for argument 2
-we enter the function with the above arguments and a series of three conditional statements ask us if out input "recycling" matches directly to three
possible strings. For the one it does match with: the apropriate parameter value within the bins object is increased by one.
-return the new values for object bin


Things Done While Writing:
-ther was a strong sense at first that a for each loop would be needed to cycle through the properties of the object. This turned out to not be needed
since we could simply check if any of the keys within the object matched our function input using conditional statements.
BOTTOM LINE: Objects are not arrays and for each loops specifically work on arrays.

*/