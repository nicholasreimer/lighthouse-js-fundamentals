function lastIndexOf(list, num) {
  let occurs = 0;
  let index = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === num) {
      index = i;
      occurs++;
    }
  }
  if (occurs > 0) {
    return index;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
 /*
Start:
-print to console the output of function lastIndexOf when the following array and number are passed as the arguments for the functions parameters

Enter the Function:
-variable named occurs is created and is equal to zero,
-variable named index is created and is equal to zero, 

Enter the Loop within the Function:
-a for loop starts at 0 and stops when i is less then the arrays total length, the loop iterates by plus 1 each loop
-if during the looping through the array, the value of one of the elements is directly equal to the num from the original argument then:
1.)var index now equals the current value of i 
2.)var occurs increases by plus one
-keep looping through untit the stop condition is met

Exit the Loop and Enter the Conditional:
-if the new value of var occurs (after the loop potentially changed it) is greater then zero return the value of index as the functions output
-else return -1 as the functions output

-3 is printed to the console


*/