var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var r=0; r < numbers.length; r++){

  for(let c=0; c < numbers[r].length; c++){
      if(numbers[r][c]%2===0)
          numbers[r][c]="even";
      else
          numbers[r][c]="odd";
  }
}
console.log(numbers);

/* EXPLANATION:
---------------------------------------------------------------------------------
START:
-log to the console the argument numbers for the console.log function
-var numbers is a nested array with x10 inner arrays, the following nested for loops will convert var numbers to a readable grid

For Loop #1:
-the 1st for loop makes it possible to read the array grid in rows (horizontal axis), loop start is r=0, stop point is when the numbers array 
index position hits the max length of the array (this is done using the .length method). Lastly the loop iterates by plus one each successfull loop

For Loop #2:
-the 2nd for loop makes it possible to read the array grid in columns (vertical axis), loop start is c=0, loop stop point is when c is less then 
var numbers[r].length 
*TRANSLATION* c will stoop looping collumns by collumn of the array when the last row of the array is met)

Conditionals:
-if any of the elements in any of the rows and columns of the numbers array are directly equal to 2 then print the string "even" to the console
-else the elements are equal to a string "odd" and will pre printed to the console

*/