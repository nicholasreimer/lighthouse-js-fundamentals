
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}
  , "Finding Nemo");

//LINE 6-9 TRANSLATION: movies(displayFavorite(movieName), "Finding Nemo")
//-All of these lines are just calling the movie function, the confusion comes from the fact that displayfavorite() function
// is declared within the function. This hides the string "Finding Nemo" and the fact that it is really just argument #2
// for the original movies() call.

/*
Code Explanation from Forum:
-You’re passing a function and a string to the movies function. 
-Inside the movies function, you’re calling the passed in function with the passed in string. 
-The function passed in logs "My favorite movie is " + the passed in string.
-The string “Finding Nemo” is being passed to the first function, and that function also passes “finding Nemo” to the second function.

Explanation of movieName Variable:
-movieName is a variable, and it’s being assinged to what name was assigned to, which is “Finding Nemo”.
-Put another way, “Finding Nemo” is being assigned to name in this line:
movies(favoriteMovie, "Finding Nemo");
-then, what is assigned to name is assigned to movieName when favoriteMovie is called.

General Notes:
-functions take arguments. Most of the time the arguments are strings, numbers, arrays or objects. 
-But sometime a function will take another function as an argument - that’s whats going on here.
-What they are trying to demonstrate is that, you can either define a function first, and then pass it along as an argument in another function, 
or, you can declare the function right where you would place the argument, in the function call.
*/