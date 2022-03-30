var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function (element, index) {
  if (element % 3 === 0) {

    test[index] = test[index] + 100;

  });
console.log(test);

/*
Explanation:
-print the value of test to the console
-test is a var storing an array with numbers as individual elements
-a for each anonymous function takes runs the test array with a var named element and a var named index as its paramters
-the argments for these parameters are the actual elements of the array and index positions
-inside the for each loop function is a conditional statement that asks each element one at a time: 
"If the element in the array is divisible by three (remainder operator ===0) then the current element inside the array gets +100"
/*