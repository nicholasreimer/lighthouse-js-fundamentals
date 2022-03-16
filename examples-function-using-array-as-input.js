function hasEnoughPlayers(array) {
  if (team >= 7) {
    teamIsBigEnough = true
  } else {
    teamIsBigEnough = false
  }
  return teamIsBigEnough
}
console.log(hasEnoughPlayers(team));
// ^MY INCORRECT CODE^

function hasEnoughPlayers(array) {
  if (array.length >= 7) {
    teamIsBigEnough = true
  } else {
    teamIsBigEnough = false
  }
  return teamIsBigEnough
}
console.log(hasEnoughPlayers(team));
/*  ^CORRECT CODE^

Main Differences between My Code and Corect Code:
1.) 
My Code:      -paramter for the function is set prematurely to the arguemnt that will be put into the function
Correct Code: -parameter is set as a temporary value that wil become the argument team

2.)
My Code:      -has an if conditional that uses the team array, it also does not specify how to read the array
Correct Code: -uses the paramter variable (which becomes the team array when passed to the func) and the .length property 
              which makes the elements within the array indexable by the conditional
*/