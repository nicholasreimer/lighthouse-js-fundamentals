const temperature = 12; //new const var named temperature is equal to 12

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
  //if const var temperature is less then 0 print "make sure you..."
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
  //else if var temperature is less then 15 print "short sleeves wont.."
} else {
  console.log("Short sleeves are fine.");
  //if neither of the above work then print "short sleeve are fine"
}

console.log("Now you're ready to go outside!");
//seperate of the above this code will print "now youre ready to...""

//NOTES:
//it doesnt matter if the var is equal to a value that meets mulitiple if/else statements
//this is because once it finds a match the code is done and moves to the next block
//ex: if temperature = -1 it would meet the requirements for both of the first two question statements
//but since it meets the first ones requirments nothing after matters