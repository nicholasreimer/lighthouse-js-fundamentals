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

/* PROCESS:
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
-we store the array values that meet the conditonal into the var capacity at index position 1

2nd Conditional Statement: [Line 17]
-a new var named type is created and is equal to the var station array at index positon 2, we run these array values through a second conditional 
statement that equates true if: the var type is directly equal to the strings "school" OR "community centre" 
-if the conditional statement equates true then store the array values in a var called goodStations 
(which was originally created and assigned on line 8) and push it to station array position 0.
*NOTE* the goodStations var was put on line 8 specifically so it could be accessed globally while inside the local function

Return the Function: [Line 22]
-we have now completed the function proccesses and are left with a new array called goodStations containg 2 items that are the 
result of the original stations array after it went through the loop and 2 seperate conditional statements.
-the last line of the function asks us to return the value of goodStations

CONSOLE RESULT:
-we call the chooseStations function to print to the console the return value of the function if stations as its argument:
(2) ['Bright Lights Elementary', 'Moose Mountain Community Centre']
*/