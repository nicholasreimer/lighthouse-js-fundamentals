let ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
/*
let index = 0;
while (index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}
*/


// Write a for loop that prints out the contents of ingredients:
/*
for(index = 0; index < ingredients.length; index++){
 console.log(ingredients[index]);
}
*/


// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (index = 0; index < ingredients.length; index++) {
  ingredients = ingredients.reverse()
}
console.log(ingredients);