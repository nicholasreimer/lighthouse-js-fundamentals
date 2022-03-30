/* ASSIGNMENT:
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other 
properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, 
a prop (like artist or tracks), and a value. 

Complete the function using the rules below to modify the object passed to the function.
-Your function must always return the entire record collection object.
-If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
-If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
-If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
-If value is an empty string, delete the given prop property from the album.
*/
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {

  if (prop !== "tracks" && value !== "") {                                               //Conditional #1
    records[id][prop] = value;
  }
  else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {        //Conditional #2
    records[id][prop] = [value];
  }
  else if (prop === "tracks" && value !== "") {                                          //Conditional #3
    records[id][prop].push(value);
  }
  else if (value === '') {                                                               //Conditional #4
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

/*
STEPS:
-enter the function with the x4 given arguments: 
1.) recordCollection = the object storing the record info, 
2.) id = property within the recordCollection object used to determine?differentiate the different albums (uses a 4 digit number)
3.) prop = property within the recordCollection object that could be: 1.) albumTitle:    2.) artist:    3.) track:
4.) value = property value of the property argument

-within the function is a series of conditional statements, whichever conditional returns true based of the given function arguments,
code specific to that conditional will run which will modify the original object recordCollection

Conditionals:
1.) IF: the value of the prop arg is NOT equal to "tracks" AND the value of the "value" arg is NOT equal to "", 
    THEN: add the value of prop as a new property into the recordCollection object at the album ID number that was passed as the func arg.
          furthermore, set the value of this new property to be equal to the value of the "value" arg

2.) IF: the value of prop arg is equal to "tracks" AND there is no property called "tracks" within the specific album id of the recordCollection object
    THEN: add prop as a new property and set its value as the "value" from the func arg, do this at the specific album id of the recordCollection object
NOTE: because you can’t push to an array that doesn’t exist. we use hasOwnProperty to check first that the "tracks" property does NOT already exsits

3.) IF: the value of prop is directly equal to "tracks" AND the value of "value" arg is NOT equal to an empty string
    THEN: push the value of "value" to the pre exsisiting track property at the specified album id for the recordCollection object

4.) IF: the value of "value" arg is directly equal to an empty string
    THEN: delete the entire property that alligns with prop arg from the specified album id for the recordCollection object

-return the new value of the object records (which is the recordCollection object passed as the argument)

------------------------------------------------------------------------------------------------------------------------------------------------------
TAKEAWAYS:
-when i first started writing my conditionals within the fucntion i referenced the specific object i was doing the test on, this was problematic since
the functions code should be written based of its paramters NOT its potential arguments. The correct thing was to change the code to run against
the parameter "records" and NOT "recordCollection"
*/

