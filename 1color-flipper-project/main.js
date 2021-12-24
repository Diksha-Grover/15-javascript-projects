const colors = ["green", "orange", "rgba(78,105,400)", "pink", "#f15025"];
const btn = document.getElementById("btn");
// getElementById() method returns the element that has the ID attribute with the specified value.
// An ID should be unique within a page. However, if more than one element with the specified ID exists, the getElementById() method returns the first element in the source code.
const color = document.querySelector(".color");
// querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
// To return all the matches, use the querySelectorAll() method instead.

btn.addEventListener("click", function () {
  // element.addEventListener(event, function, useCapture);
  // addEventListener() method attaches an event handler to the specified element.
  // function ()is an anonymous function
  // An anonymous function allows a developer to create a function that has no name, useCapture: It is an optional parameter.
  const randomNumber = getRandomNumber();
  // in javscript we use capitalize the property's "camelCased" name
  // invoking random number function

  document.body.style.backgroundColor = colors[randomNumber];
  // here we are selecting any random number from array colors 
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
  // Math.floor() method rounds a number DOWNWARDS to the nearest integer
  // Math.random () function returns a floating-point random number in the range 0–1 (inclusive of 0, but not 1) 
  // colors length is 4 here 
}