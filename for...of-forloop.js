
let amounts = [61.00, 52.25, 112.99, 5.00];
//assignable var called ammounts is equal to an array of sums

let total = 0;
for (let amount of amounts) {
  //for.of loop that starts with ammount and ends with ammounts, 
  //this style of loop assumes you want to loop through the array from start to finish one at a time
  total += amount;
}
console.log('Order total is: ', total);
//total is equal to the sum of ammounts after the loop has gone through the array