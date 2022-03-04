/*
Countdown to Launch Checkpoints:
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)

Write a while loop that counts down from 60 seconds and:
If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
*/

let seconds = 60
//a chanageable variable named seconds with a value set to 60, this is the start point for the while loop
while(seconds > -1) {
//a while loop that has a stopping condition of greater then -1
 if(seconds == 0){
   console.log('Solid rocket booster ignition and liftoff!');
 }
//a if conditional that checks if seconds is equal to zero, if true it prints a thing
else if(seconds == 6){
  console.log('Main engine start');
}
//a else if conditional that checks if seconds is equal to 6, if true it prints a thing
else if(seconds == 10){
  console.log('Activate main engine hydrogen burnoff system');
}
//a else if conditional that checks if seconds is equal to 10, " "
else if(seconds == 16){
  console.log('Activate launch pad sound suppression system');
}
//a else if conditional that checks if seconds is equal to 16, " "
else if(seconds == 31){
  console.log('Ground launch sequencer is go for auto sequence start');
}
//a else if conditional that checks if seconds is equal to 31, " "
else if(seconds == 50){
  console.log('Orbiter transfers from ground to internal power');
}
//a else if conditional that checks if seconds is equal to 50, " "
else{
  console.log('T-' + seconds + ' seconds');
}
//an else conditional that prints the var to a specific console log string with concatenated elements

seconds = seconds - 1
}
//this while loop decrements by -1 each loop