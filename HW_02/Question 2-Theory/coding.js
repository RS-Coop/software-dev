function display2_1() {
  var myanswer  = "My answer goes here: The first log will output undefined, the second will output true, and the third false. " // TODO 2.1: Fill in Answer here after the :
  myanswer += "Undefined means that a variable has not been defined while null means no value but null must be set. The triple equals "
  myanswer += "is only true if the operands are of the same type which null and undefined are not which is why the third is false."
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: This code will throw an error as x is not declared which is required in strit mode. If the strict was removed this would be fine." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: The childNodes function gives all children of an element even if the display is set to none, or if it just text/comments. This is why there are more children than expected/visible. If one wanted just elements they should use children." // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName('div'); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName('naruto'); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").childNodes; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}
