//for loop that prints out the numbers 100 to 200
//start condition is x =100, stop condition is x is less then or equal to 200, 
//iterator is x plus 1, the loop prints the value of x to the console on each loop

for (let x = 100; x <= 200; x++) {
  //a conditional statement that checks if x is divisible by 3 AND 4, 
  //if true console prints "LoopyLighthouse" instead of the number
  if (x % 3 === 0 && x % 4 === 0) {
    console.log('LoopyLighthouse');
  }
  //a conditional statement that checks if x is divisible by 3, 
  //if true console prints "Loopy" instead of the number
  else if (x % 3 === 0) {
    console.log('Loopy');
  }
  // a conditinal statement that checks if x is divisible by 4
  //if true console prints "Lighthouse" instead of the number
  else if (x % 4 === 0) {
    console.log('Lighthouse');
  }
  // catch all else statement prints the number x to the console
  else {
    console.log(x)
  }
}
