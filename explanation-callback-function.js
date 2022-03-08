var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

helloCat(catSays);

/*
Explanation of Callback Function:
-we start on line 13 where a functioin named hellocat has another function named catSays as its argument
-when we go to the function helloCat it has a temporary placeholder value of callbackfun in its arguement (callbackfunc is the placeholder for catSays func)
when the function is run it will add the string "hello " to the output of the callbackfunc with 3 as its arguement
-now we jump to the cat says function on line 1 where we encounter a function that uses the callbackfunc arguement of 3 as the arguement for a parameter called 'max"
-the body of this function runs a for loop that starts at 1 and ends at the value of max (which is 3 in our case)
-every time the loop runs it adds a meow to a string
-now we jump back to the helloCat function which asks us to add the string "Hello " to the result of the catSays function
-this gives us: "Hello meow meow meow"
*/
