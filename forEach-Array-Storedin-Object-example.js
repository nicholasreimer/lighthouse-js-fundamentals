var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function (donuts) {

  console.log(donuts.type + " cost " + donuts.cost + " each");
});

/* 
EXPLANATION:
-a for each function has been created that loops through the donut object array
-each loop the function prints to the console a concatenated string made up of element values from the the donuts array

EXAMPLE:
LOOP 1: console.log(donuts.type = Jelly and donuts.cost = 1.22)
LOOP 2: console.log(donuts.type = Chocolate and donuts.cost = 2.45)
etc...

-----------------------------------------------------------------
Assignment:
-Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
*/