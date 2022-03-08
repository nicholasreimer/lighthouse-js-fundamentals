let sound = ''                        // declared variable named sound is equal to empty string

function laugh(num) {                 // decalred function named laugh and set single parameter called num
  for (var x= 0 ; x < num ; x++) {    // for loop thats starts at zero and stop at num, it increases by 1 each loop
    sound = sound + 'ha';             // sound is reassigned to equal the string 'ha' when inside the local loop
  }
  sound = sound + '!';                // outside of the loop and inside of the function, sound = 'ha' + '!'
  return sound;                       // spit out sound from the function laugh machine
}
console.log(laugh(3));                // print to the terminal the outcome of the laugh function using 3 as the functions arguement

// What Happens?
// 1.) 3 becomes the arguement for the laugh(), 
// 2.) the for loop inside the body of the function initiates
// 3.) It starts at 0 and runs three times (this is because the stop point of the loop is x<num)
// 4.) loop has finished with an output of 'hahaha'
// 5.) function body runs next since it is outside of the loop{}, it adds a '!' string onto the end of the loop output
// 6.) terminal prints: hahaha!