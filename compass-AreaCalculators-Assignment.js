/* ASSIGNMNET:
-In this exercise, we will define 3 seperate functions to calculate the areas of 3 different shapes:  1.)rectangles  2.)triangles  3.)circles
-The parameters to the functions will always be numbers.

-Each function should return a number that corresponds to the area of the shape. Here is the math for each of the shapes:
1.) rectangle: length × width
2.) triangle: base × height / 2
3.) circle: π × radius2
*NOTE* To access the value of π in your JavaScript code, use Math.PI

-If any of the parameters are negative, the function should return undefined.
*/

function calculateRectangleArea(length, width) {
  let rectangleArea = length * width
  if (rectangleArea < 0) {
    rectangleArea = undefined
  }
  return rectangleArea
}

function calculateTriangleArea(base, height) {
  let triangleArea = (base * height) / 2
  if (triangleArea < 0) {
    triangleArea = undefined
  }
  return triangleArea
}

function calculateCircleArea(radius) {
  let circleArea = Math.pow(radius, 2) * Math.PI
  if (radius < 0) {
    circleArea = undefined
  }
  return circleArea;
}


/* 

^ The above was my version of the assignment which meets all criteria and runs properly, however the lint checker did not like it
so i used the below code found online. I include it here as an example of another way to solve the same problem:

*NOTES ON DIFFERENCES BETWEEN THE TWO*
In many respects the code below is smoother and tighter then my first attempt, here are some reasons why:
1.) all three functions use the same formula below, In mine the circle function has to hav a workarounds/extra code to make it work
2.) my code runs the two func arguments through the function THEN checks if the answer is negative, the example code below checks if the 
argument values for the function are negative FIRST and then runs the function code

const calculateRectangleArea = function (length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  } else {
    return “undefined”;
  }
};

const calculateTriangleArea = function (base, height) {
  if (base > 0 && height > 0) {
    return base * height / 2;
  } else {
    return “undefined”;
  }
};

const calculateCircleArea = function (radius) {
  if (radius > 0) {
    return Math.PI * Math.pow(radius, 2);
  } else {
    return “undefined”;
  }
};
*/