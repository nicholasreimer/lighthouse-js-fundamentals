/*
ASSIGNMENT:
-We'll write a chooseStations(stations) function that takes 
in an array of possible voting stations, and then only returns 
the names of the stations that are appropriate.

-Your function will receive an array of stations, where each station 
itself is an array with a name, a capacity, and a venue type.

-In order for a station to be deemed appropriate, it must have a 
capacity of at least 20, and be a school or community centre.
*/

//a constant var named stations contains an array housing 3 seperate arrays that each contain:
//1.) A Location  2.) The capacity of the Location  3.) the type of location
let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//a function expression housed in a const var named chooseStations is a function with a single parameter that contains a var named stations
const chooseStations = function (stations) {
//the function body runs a series of conditional statements that check the array using the .length object to see if:
// position #1 of each seperate array inside the stations array is equal or greater then 20 AND position #3 of each nested array is either a "school" or a "community center"
// if both are true return the name of each place to the stations array

if(stations[0,1] >= 20 && stations[0,3] === "school" || "community"){
return = stations [];
  } else {
    console.log("not gucci");
  }
}

// will return the name of the locations that meet the conditional statement from the function in an array [Place 1, Place 2]
chooseStations(stations);




/*
if(x %3 ===0 && x %4 ===0){
  console.log('LoopyLighthouse');
}

The chooseStations function should return the array:
['Bright Lights Elementary', 'Moose Mountain Community Centre']
*/