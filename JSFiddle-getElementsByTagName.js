function alertInnerTextOfArray(elements) {
  for (var i = 0; i < elements.length; i++) {
    alert(elements[i].innerText);
  }
}

alertInnerTextOfArray(document.getElementsByTagName('p'));

//RESULT OF ABOVE: an alert comes on screen with text that says "Hello World"

/* EXPLANATION:
-a function called AITOA has another function named getElementsbyTagName with a paragraph tag element as its parameter as the the parameter for AITOA
-when AITOA func is run we jump into a for loop
-it starts at zero and ends when the total length of the getElementsbyTagName is reached
-for each successfull loop the func sends an alert made up of the text from the getElementsbyTagName func that is set to P which is the html paragrpah
-line 9

ORIGINAL INSTRUCTIONS:
    1. Create an empty variable, `elm`
    2. Find a paragraph by its tag name
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM" or "Hello World!"
*/