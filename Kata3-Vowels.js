/*
-count the number of vowels that appear in a given string. 
-consider the following to be vowels: a, e, i, o, and u.
-create a func numberOfVowels that will receive a string and return the number of vowels in that string.

STEPS:
-name a func called numberOfVowel
-create a var called numofVowels
-create a for loop that goes through each letter of the string
-a series of conditional statements check if each letter is a vowel, if yes plus equals that to a var called 
*/

function numberOfVowels(data) {
  let num = 0

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      num += 1
    }
  }
  return num;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


/*
INPUT:
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

OUTPUT:
3
5
5
*/