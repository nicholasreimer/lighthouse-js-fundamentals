//HOW TO: access different values in different storage scenarios 

let anInstructor = { name: "Samuel", course: "iOS" };

let anArrayOfInstructors = [
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" }
];

//HOW TO: acces the value of an object stored in a var
console.log(anInstructor);                            //prints the value of the var anInstructor

//HOW TO: access the value of a property within within an object
console.log(anInstructor.name);                     //prints the value of the "name" property within the object anArrayofInstructors

//HOW TO: access the value of an element within an array (an object can be an element of an array)
console.log(anArrayOfInstructors[0]);              //prints all of the info of the first object in the array anArrayofInstructors

//HOW TO: access the value of a property within a specified element of an array
console.log(anArrayOfInstructors[0].course);     //prints the value of the "course" property within the first object of the array anArrayofInstructors




