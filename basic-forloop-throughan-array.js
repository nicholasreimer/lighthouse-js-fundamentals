
//assignable var called ammounts houses an array of sums
let amounts = [61.00, 52.25, 112.99, 5.00];

//assignable var called total is equal to zero
let total = 0;
//for loop with a new var called i, start condition is i equals 0, 
//stop condtion is when i is less then var ammounts.length (.length counts the number of items in the ammount array) 
//iterator value is plus one per loop
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
  //for each successfull loop add the value of the var ammount element that is currently being looped to the var total
  //ex: Loop1 is successfull so add 61.00 to var total, Loop2 is successfull so add 52.25 to var total (on top of 61.00)
  //successfull loop = a loop that meets the start/stop conditions and runs

}
//self explanatory
console.log('Order total is: ', total);
