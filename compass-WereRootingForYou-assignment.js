/* ASSIGNMENT
-implement a function called judgeVegetable() that will decide which vegetable is best based on a given judging characteristic. 
=function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the tomato, either redness or plumpness
-function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.
*/
const judgeVegetable = function (vegetables, metric) {

  vegetables.sort(function (a, b) {

    return b[metric] - a[metric];

  });
  return vegetables[0].submitter
}

console.log(judgeVegetable([
  {
    submitter: 'Old Man Franklin',
    redness: 8,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 10,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 9
  }
], 'redness'))


/* EXPLANATION:
-the array of objects and the string "redness" are arguments for the func judgeVegetable(vegetables, metric)
-inside the function the array of objects gets sorted by the js sort() function method
-the sort() functin returns the array of objects in descending order
-the judgeVegetable func returns the value of the submitter key at index value 0 of the vegetables array 
(which was rearranged by the sort() so that the first object in the array is the one with the highest metric value)

Additional Note:
-you can put anything in the metric func parameter as long as that same value is represented as a property in the objects of the array
Example:
INPUT:  metric = "weight" AND objects within new array argument hav weight listed as a parameter: 
OUTPUT: Function will output name of submitter for veg with highest weight

NOTES ON ORIGINAL ATTEMPT:
-i built a series of coondtionals to figure out what metric was before runing the sort, this caused two problems:
1.) it removed the possibility of a new metric func input being able to work since it distilled the options for metric to only what the 
conditionals would allow
2.) it created extra code that wasnt neccesaary. the final code was able to put the metric parameter/argument directly into the sort function
allowing for less code and more flexibilty for what could be passed for metric

TAKEAWAYS:
-this one was fuckin brutal
*/ 