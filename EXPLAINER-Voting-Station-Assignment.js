let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let goodStations = []

  for (const station of stations) {
    let capacity = station[1]

    if (capacity >= 20) {

      const type = station[2]

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));

/*
PROCESS:

Start Point: [Line 25]
-print to the the console the result of the chooseStations function with var stations as the arguement

Enter the Function and Begin the Loop: [Line 7 then 10]
-now we got to the chooseStations function where the var stations is eqaul to an array containing three seperate arrays with seperate values 
in each array.
-the function sends us into a for...of statement/loop that cycles through each seperate array within the main array. 
-From this point forward we can call different values in the area by ther index

1st Conditional Statement: [Line 11]
-while still in the loop a new var named capacity is created and is equal to the station variable at array index position 1  
-now we enter the first conditional statement that asks: 
If the var capacity is greater or equal to 20 then a new const var named type is equal to the var station at the second array position

2nd Conditional Statement: [Line 17]
-a second conditional statement runs true if the var type is directly equal to the strings "school" OR "community centre" 
(which is stored in station array index position 2)
-if the conditional statement equates true store the values in a var called goodStations (which was originally created and assigned on line 8) 
and push it to station array position 0.
*NOTE* the goodStations var was put here specifically so it could be accessed globally while inside the local function


Return the Function: [Line 22]
-we have now completed the function proccesses and are left with a new array called goodStation containg 

CONSOLE RESULT:
(2) ['Bright Lights Elementary', 'Moose Mountain Community Centre']
-two schools meet the requirements for being a voting station!

*/