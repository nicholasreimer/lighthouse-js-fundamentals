/* ASSIGNMENT:
1.)sensors logs how often cars pass by, 
2.)and track their speeds.
3.)log the time and speed to the car object and return all as an array

-Create a function carPassing(cars, speed), that takes in an array of car objects, and the speed of a car as it passes the sensor.
-This function should create a new object with a property called speed, and another property called time and add it to the cars array. 
-We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript!

-Our function should return an array that includes all of the elements in cars as well as our new element.
*/
const carPassing = function (cars, speed) {

  const newObject = {
    speed: speed,
    time: Date.now(),
  };
  cars.push(newObject);

  return cars
};

carPassing(    //LINES 23 to 36: example function input for the above function to use
  [{
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }]
  , 38)

/* EXPLANATION:
-both an array of objects and the number 35 are passed to the carPassing func as arguments

-an object called newObject is created and houses two parameters: 
1.) key is speed, value is the argument var speed which is 35
2.) key is time, value is the js method Date.Now() which when called returns the number of milliseconds elapsed since January

-newObject gets pushed to the var cars (newObject becomes a new addition to the exsisting array of objects stored within the var car)
-return cars outputs the new value of var cars array of objects

-----------------------------------------------------------------------------------------------------
ORIGINAL ATTEMPT:
function carPassing(cars, speed) {
  let returnArray = []               //-function output will go here, should include all of the elements in cars as well as the new speed elements

  let speedObj = { speed: speed }         //-create a new object named speedObj with a property called speed that houses the func argument speed input
  returnArray.push(speedObj);            //-push() speedObj to the new array

  let timeObj = { time: Date.now() }     //-create a new object with a property called time that uses the Date.now() function mehtod 
  returnArray.push(timeObj);            //-push() timeObj to the new array

  cars.forEach(function (cars) {                 //-for each loop that loops through the car array 
    returnArray.push([cars.time, cars.speed])    //-push() the value of speed and time from the car array to the returnArray so it can be  
  }                                              // joined with the new object values from speedObj and timeObj
 return returnArray
}

NOTES ON ORIGINAL ATTEMPT:
-an unneccessary var named returnArray was created with the intention of housing the functions ouput, this was unnecesarry since the correct way to
simply added the new object to the exsisting var cars array.
-instead of one new object with two seperate properties i made two seperate objects. 
-becuase i accidently started by creating a var array to house func output, the two new objects pushed the value ther instead of simply to the var cars array
-becuase i was focused on the var created for func output i made a for each loop to cycle through cars and send it to the var array
i could have simply ignored the values inside of the var cars array since all i was doing was adding a new object to it

TAKEAWAYS:
-do u need a var to store the output of the function? is that what the instructions are asking for?
-objects should be declared with const if they wont be changed 
-distill down exactly what the instructions are asking you to do, for example you could distill this assignment to:

Assignment Distillation:
-create a function that takes two arguments: 
1.) var cars: an array of objects   2.)var speed: a numerical value 

-inside the function create a new object with two parameters:
1.) time: the exact time right now (using Datenow())   2.) speed: the numerical value passed as the func argument

-push() the newly created object to var cars
-return the new value of var cars
*/