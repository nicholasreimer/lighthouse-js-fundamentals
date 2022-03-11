/* ASSIGNMENT:
-Implement a function called finalPosition(moves), which will calculate the position of the parade based on an array of directional moves. 
the parade will move on an X-Y grid like the following.
-Your function will receive an array of moves, which are strings that say either north, south, west, or east, these represent the parade moving 
in a particular direction by a single space on the grid. 
-By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade 
after completing all of the moves. 
-The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at [0,0].
*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {
  //a var has been named storedMoves and will be the home for the results of the var move array after they have been modified
  let paradePosition = []

//for loop that runs through the values stored in the moves array and runs them in order 
//through the conditional statements below
for (let i = moves[0]; i >= moves[30]; i++) {
  
  //a series of conditional statements that determine what each array will do
 if(i === 'north') {
  console.log('frank')

 } else {
   console.log('franklin')
   
 }

 }
 return paradePosition 
}

/*
 if (type === "school" || type === "community centre") {
  goodStations.push(station[0])




/* STEPS:
Goal Summary:
-receive an array made up of individual strings, using a for loop and starting at index position zero of the array calculate the new position after 
running it through a series of conditional statements to determine if it is one of four options: north, west, south, east 
-store this new position in a var named paradePosition as an array
EXAMPLE: 
Start Position of new array = [x=0,y=0]
1.)for loop runs 1st input from var moves array (at index position 0) which is: 'north'
2.)the "north" input computes to adding 1 to y. new array = [x=0,y=1]
*NOTE* this process happens through a conditional statement inside of the finalPosition function that goes like: if y=north then y+=1 etc
3.)the new position is stored in paradePosition until it is rewriten by the next loop run
*SUB Example* 
START = [x=0, y=0] + 'north' = [x=0, y=1] + 'north' = [x=0, y=2] + 'west' = [x= -1,y=2] ...




EXAMPLE OF INPUT/OUTPUT:
//If you input:

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
finalPosition(moves);

//You should get the following from the function:
[-1, 4]

*/