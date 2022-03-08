
//assignable var called ammounts is equal to an array of sums
let amounts = [61.00, 52.25, 112.99, 5.00];

//assignable var called total is equal to zero
let total = 0;
//for loop with a new var called i, start condition is i equals 0, 
//stop condtion is when i is less then var ammounts.length (.length counts the number of items in the ammount array) 
//iterator value is plus one per loop
for (let i = 0; i < amounts.length; i++) {
  //var total is equal to the ammounts var when i is included
  total += amounts[i];
}
//self explanatory
console.log('Order total is: ', total);
