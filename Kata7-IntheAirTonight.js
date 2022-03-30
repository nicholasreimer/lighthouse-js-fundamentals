/* ASSIGNMENT:
 implement a function called checkAir() that will take in two arguments:
 1.) first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. 
 2.) second argument is a number representing the highest acceptable amount of dirty samples. 
EXAMPLE: a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air 
 to be considered clean (when threshold is equal to 0.4)
 
 -Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.
*/
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

function checkAir(airSamples, threshold) {
  let dirtySamples = 0

  for (let i = 0; i < airSamples.length; i++) {

    if (airSamples[i] === "dirty") {
      dirtySamples += 1
    }
  }
  if (dirtySamples / airSamples.length > threshold) {
    return "Polluted"
  } else {
    return "Clean"
  }
};


/*
STEPS:
-both an array of strings and a numerical value are passed as arguments to a function called checkAir()
-inside of the function a new var called dirtySamples is created and given an initial value of 0
-a for loop cycles through the entire arguemnt array from begining to end one element at a time
-if the current element being looped is directly equal to the string "dirty" then the value of var dirtySamples increases by one
-outside of the loop, a conditional asks: "If the value of dirty samples divided by the length value of airSamples is greater then the value of threshold"
return a string thats says "Polluted" else return "Clean"

TAKEAWAYS:
-tried to add some fancy code that would stop the loop early if dirty samples hit the threshold mark before it had fully finished, i believe 
the reason i couldnt get it sorted was i didnt divide dirty samples by airsamples.length. Eventually decided to stop and just go to a simpler setup that 
started when the loop finished.
-Had some difficulties dialing in the protocol for looping through an array element by element but ultimatley figured it out:
When looping through an array you do an action to each element by calling out element with its index set to the loops start variable [Line 30 [i]]
*/