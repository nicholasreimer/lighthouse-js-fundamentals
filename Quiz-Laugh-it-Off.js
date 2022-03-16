

function laugh(num) {                  // decalred function named laugh and set single parameter called num
  let sound = ''                      // declared variable named sound is equal to empty string

  for (var x = 0; x < num; x++) {    // for loop thats starts at zero and stop at num, it increases by 1 each loop
    sound += 'ha';                  // add the string 'ha' to the currently empty string value of var sound each loop
  }

  sound += '!';                //once the loop has finished add the string '!' to the string stored in var sound

  return sound;              // spit out the value of sound as the result of the laugh function
}
console.log(laugh(3));     // print to the terminal the outcome of the laugh function using 3 as the functions arguement

// What Happens?
// 1.) 3 becomes the arguement for the laugh(), 
// 2.) the for loop inside the body of the function initiates
// 3.) It starts at 0 and runs three times (this is because the stop point of the loop is x<num)
// 4.) loop has finished with an output of 'hahaha'
// 5.) function body runs next since it is outside of the loop{}, it adds a '!' string onto the end of the loop output
// 6.) terminal prints: hahaha!