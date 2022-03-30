let camelCase = function (input) {
  let output = '';
  let array = input.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      output += array[i].charAt(0).toUpperCase() + array[i].slice(1);

    } else {
      output += array[i].toLowerCase();
    }
  };
  return output;
};

console.log(camelCase("dalila is the coolest"));

/*
STEPS:
-the input string is put in as the functions argument

ENTER THE FUNCTION:
-within the function two new vars are created:
1.) var ouput which is equal to an empty string (this will be the function output at the end)
2.) var array which is the value of the function input after being split()
NOTE: split() turns the string into an array of word based elements ex: array[0] is now equal to the first word in the input string 
where as before the split() the same index position would have been equal to the first letter of the string.

ENTER THE FOR LOOP:
-next we enter a standard for loop that cycles through the new array for its entire length

IF CONDITIONAL WITHIN THE FOR LOOP:
-for each successfull loop, if the array elements index is NOT equal to 0 then...
NOTE: by having the if statmenet ask if array element at index 0 is NOT equal to zero we can uppercase all the words that come after that first element

-...add the value of the array element at its loop determined index AND Uppercase the first letter in that element, lastly add

*TRANSLATION of: 1.) output +=...   2.) ...array[i].charAt(0).toUpperCase()...  3.)  ...+ array[i].slice(1);
1.) add the resulting value of this loop cycle to var output: 
2.) capitlize the first letter (via toUpperCase() methhod) of the array element at the index position set by the current loop (Loop #1 =is), 
at position zero of that specific element (is =i (via the charAt(0) method))
3.) lastly add the value of the array element at the index position set by the current loop when sliced at index position 1 to var ouput 
(add 's' to 'I' to get "Is")
*DUMBED DOWN TRANSLATION: 
-for the array element that is currently being looped, capitilize and seperate its first letter. Now since youve lost the rest of that word add 
the rest of the word back skipping the first letter. now the specific array element of the current loop has a capitilized first letter and has been added
to the string that sits inside var output

ELSE CONDITIONAL WITHIN THE FOR LOOP:
-if the array element is equal to 0, add the value of the element to var output after its been run through the toLowerCase() method

EXIT THE FOR LOOP:
-function output is the value of var output



GENERAL NOTES:
-the reason the first array element ("this") gets added to the begining of the var output string is that the first element is always going to run
through the loop first before the others due, LOOP 1 will always shoot the array element into the "else" conditional because of the nature of the initial "if"
conditional.
*/