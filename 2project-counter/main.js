// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
// forEach () method calls a function for each element in an array
// foreach can run on nodelist
// arrays run on nodelist . if we want to run anything else we need to convert it into array first
  btn.addEventListener("click", function (event) {
  // a function to call another function
  // A callback function can run after another function has finished
    const styles = event.currentTarget.classList;
    // var declarations are globally scoped or function scoped while let and const are block scoped. 
    // generally, whenever you see {curly brackets}, it is a block. 
    // var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
    // currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.
    // classlist will give the list of the classes that element has
    if (styles.contains("decrease")) {
    // if decrease is clicked then i wan to decrease the count
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "blue";
    }
    value.textContent = count;
  });
});